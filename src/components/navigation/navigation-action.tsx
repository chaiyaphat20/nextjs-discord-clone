'use client'
import { ActionTooltip } from '@/components/action-tooltip'
import { useModal } from '@/hooks/use-modal-store'
import { Plus } from 'lucide-react'

const NavigationAction = () => {
  const { onOpen } = useModal()
  return (
    <div>
      <ActionTooltip label="Add a server" side="right" align="center">
        <button
          className="flex items-center group"
          onClick={() => onOpen('createServer')}
        >
          <div
            className="flex mx-3 dark:bg-neutral-700 h-[48px] w-[48px] 
        transition-all overflow-hidden items-center justify-center bg-background group-hover:bg-emerald-500
        rounded-[24px] group-hover:rounded-[16px] "
          >
            <Plus
              size={25}
              className="transition group-hover:text-white text-emerald-500"
            />
          </div>
        </button>
      </ActionTooltip>
    </div>
  )
}

export default NavigationAction
