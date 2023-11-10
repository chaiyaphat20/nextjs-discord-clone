import { ModeToggle } from '@/components/mode-toggle'
import { ScrollArea } from '@/components/ui/scroll-area'
import { Separator } from '@/components/ui/separator'
import currentProfile from '@/lib/current-profile'
import { db } from '@/lib/db'
import { UserButton } from '@clerk/nextjs'
import { redirect } from 'next/navigation'
import { Fragment } from 'react'
import NavigationAction from './navigation-action'
import NavigationItem from './navigation-item'

const NavigationSidebar = async () => {
  const profile = await currentProfile()
  if (!profile) {
    //ถ้ายังไม่ login จะ redirect ไป หน้า login
    return redirect('/')
  }

  //จะ return Server ทั้งหมด ที่ user คนที่มี โดยใช้ profiledId
  const servers = await db.server.findMany({
    where: {
      members: {
        some: {
          profileId: profile.id
        }
      }
    }
  })

  return (
    <div className="space-y-4 flex flex-col items-center h-full text-primary w-full dark:bg-[#1E1F22] py-3">
      <NavigationAction />
      <Separator className="h-[2px] bg-zinc-300 dark:bg-zinc-700 rounded-md w-10 mx-auto" />
      <ScrollArea className="flex-1 w-full">
        {servers.map((server) => (
          <Fragment key={server.id}>
            <div className="mb-4" key={server.id}>
              <NavigationItem
                id={server.id}
                name={server.name}
                imageUrl={server.imageUrl}
              />
            </div>
          </Fragment>
        ))}
      </ScrollArea>
      <div className="flex flex-col items-center pb-3 mt-auto gap-y-4">
        <ModeToggle />
        <UserButton
          afterSignOutUrl="/"
          appearance={{
            elements: {
              avatarBox: 'h-[48px] w-[48px]'
            }
          }}
        />
      </div>
    </div>
  )
}

export default NavigationSidebar
