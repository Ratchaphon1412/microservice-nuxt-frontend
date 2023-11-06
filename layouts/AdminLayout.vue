<template >
    <div class=" bg-white min-h-screen">
    <main>
        <AdminNavbar></AdminNavbar>
        <div class="flex justify-center h-[150px] w-full bg-stone-600 from-indigo-600 via-indigo-700 to-violet-800 ">
            <div class="flex h-4/5 px-16 items-center border-b-2 md:w-[1300px]">
                <div>
                    <h1 class="font-poppin text-4xl text-white"> ADMIN management</h1>
                </div>
                
            </div>

        </div>

                <div class="flex justify-between text-black ">
                <AdminSideBar/>          
                        <slot />
                
                </div>
    </main>
</div>
  </template>