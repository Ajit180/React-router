import React, { useState } from 'react'
import { Dialog,DialogContent,DialogHeader,DialogTitle,DialogTrigger } from './ui/dialog'
import { Button } from './ui/button';

//ReactStateChanges by using the dialog Example
const RenderStateChanges = () => {
    const [isOpen, setIsOpen] = useState(false); // State to control dialog visibility
  return (
    <div className='flex justify-center items-center h-screen'>
        <Button onClick={()=>setIsOpen(true)}> Open Dialog</Button>
       <Dialog open={isOpen} onOpenChange={setIsOpen}>
        <DialogContent>
          <DialogHeader>
            <DialogTitle>Dialog Box</DialogTitle>
          </DialogHeader>
          <p>This is a simple dialog box!</p>
          <div>
            <label className='text-right' htmlFor="name"> Name</label>
            <input type="text" className='cols-span-3' />
          </div>


          {/* Close Button */}
          <Button onClick={() => setIsOpen(false)}>Close</Button>
        </DialogContent>
      </Dialog>
    </div>
  )
}

export default RenderStateChanges
