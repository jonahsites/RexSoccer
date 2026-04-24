# Security Specification - REX Soccer Training

## Data Invariants
1. **User Profiles (`/users/{userId}`)**: 
   - Users can only create and manage their own profile.
   - The `role` field is protected: a regular user can only set it to 'client' on creation and cannot change it during updates.
   - `uid` and `email` are immutable once created.
   - Email must be verified if possible (mandated where practical).

2. **Bookings (`/bookings/{bookingId}`)**:
   - Only authenticated users can create bookings.
   - A booking must belong to the user who created it (`userId` must match `request.auth.uid`).
   - `status` field can only be moved to 'cancelled' by the owner, or any state by an admin.
   - `createdAt` must be `request.time`.

3. **Contact Messages (`/contact_messages/{messageId}`)**:
   - Publicly accessible for creation (no auth required).
   - Entire document is immutable after creation.
   - Only admins can read or delete these messages.

## The \"Dirty Dozen\" Payloads (Attack Vectors)

1. **Privilege Escalation**: Create a user document with `role: 'admin'`.
2. **Identity Theft**: Update a user document that doesn't belong to the current `auth.uid`.
3. **Ghost Booking**: Create a booking with a `userId` belonging to another user.
4. **Status Hijack**: Change a booking status from 'pending' to 'confirmed' as a non-admin.
5. **Collection Scraping**: List all `contact_messages` as an unauthenticated or non-admin user.
6. **Immutable Breach**: Change the `email` field in a user profile after creation.
7. **Resource Exhaustion**: Send a 1MB string in the `displayName` field of a profile.
8. **ID Poisoning**: Create a booking with a document ID that is 2KB in size.
9. **Schema Bypass**: Create a contact message document missing the `message` field.
10. **Temporal Manipulation**: Manually set `createdAt` to a date in the past or future.
11. **Admin Impersonation**: Attempt to read the entire `users` collection as a 'client'.
12. **Orphaned Write**: Create a booking with a `userId` that does not exist in the `users` collection.

## Test Runner Design (Logic verification)
The `firestore.rules` will be verified using these cases. All attack vectors above must return `PERMISSION_DENIED`.
