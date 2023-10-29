import { currentUser, redirectToSignIn } from '@clerk/nextjs'

import { db } from '@/lib/db'

export const initialProfile = async () => {
  const user = await currentUser()
  if (!user) {
    return redirectToSignIn()
  }

  const profile = await db.profile.findUnique({
    where: {
      userId: user.id
    }
  })

  if (profile) {
    return profile
  }

  const newProfile = await db.profile.create({
    data: {
      userId: user.id,
      name: `${user.firstName} ${user.lastName}`,
      imageUrl: user.imageUrl,
      email: user.emailAddresses[0].emailAddress
    }
  })

  return newProfile
}

// {
//   id: '8e4cf34b-64ed-4cc7-82fc-0baedbbf4155',
//   userId: 'user_2XQOMOshla39ls60rObPhu8TM6Z',
//   name: 'ชัยภัทร B5922314',
//   imageUrl: 'https://img.clerk.com/eyJ0eXBlIjoicHJveHkiLCJzcmMiOiJodHRwczovL2ltYWdlcy5jbGVyay5kZXYvb2F1dGhfZ29vZ2xlL2ltZ18yWFFPTU15Q3JDOHpOd2k5S2cyQ2FhdmlvWU0ifQ',
//   email: 'chaiyaphat.b5922314@gmail.com',
//   createdAt: 2023-10-29T15:47:33.754Z,
//   updatedAt: 2023-10-29T15:47:33.754Z
// }
