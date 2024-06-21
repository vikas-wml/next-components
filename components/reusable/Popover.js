import { Popover, Transition, Fragment } from "@headlessui/react";

export default function PopoverDIv() {
  return (
    <div>
      <Popover className="relative flex bg-white justify-center items-center group">
        {({ open }) => (
          <div className="flex text-sm font-semibold gap-10 justify-center items-center ">
            {items &&
              items.map((item, id) => (
                <Fragment key={id}>
                  <span
                    className="text-black cursor-pointer pb-2 hover:underline hover:text-blue-800 md:block hidden"
                    onMouseEnter={() => togglePopover(item.title, true)}
                    onMouseLeave={() => togglePopover(item.title, false)}
                  >
                    {item.title}
                  </span>

                  <Transition
                    as={Fragment}
                    show={popoverStates[item.title]}
                    enter="transition ease-out duration-200"
                    enterFrom="opacity-0 translate-y-1"
                    enterTo="opacity-100 translate-y-0"
                    leave="transition ease-in duration-150"
                    leaveFrom="opacity-100 translate-y-0"
                    leaveTo="opacity-0 translate-y-1"
                  >
                    <Popover.Panel
                      static
                      className="absolute left-1/2 transform -translate-x-1/2 top-full  w-[100%] opacity-100 z-[999]"
                    >
                      <div className="h-px bg-gray-400 w-full "></div>
                      <div
                        className="overflow-hidden bg-white w-full shadow-lg ring-1 ring-black/5 flex group-hover:block"
                        onMouseEnter={() => togglePopover(item.title, true)}
                        onMouseLeave={() => togglePopover(item.title, false)}
                      >
                        <div className="w-[80%] mx-auto items-center justify-center ">
                          <div className="grid grid-cols-4">
                            {item.child_items.map((data) => (
                              <div
                                key={data.id}
                                className="p-10 gap-10"
                                style={{ backgroundColor: item.bg }}
                              >
                                <div className="text-black py-3 text-base font-bold">
                                  {data.title}
                                </div>

                                <div className="space-y-1">
                                  {data?.child_items?.map((subItem) => (
                                    <div
                                      key={subItem.id}
                                      className="text-gray-600 text-sm "
                                    >
                                      {subItem.title}
                                    </div>
                                  ))}
                                </div>
                              </div>
                            ))}
                          </div>
                        </div>
                      </div>
                    </Popover.Panel>
                  </Transition>
                </Fragment>
              ))}
          </div>
        )}
      </Popover>
    </div>
  );
}
