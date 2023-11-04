<template >
    <body class=" bg-white h-screen">
    <main >
        <AdminNavbar></AdminNavbar>
        <div class="flex justify-center h-[150px] w-full  from-indigo-600 via-indigo-700 to-violet-800 ">
            <div class="flex h-4/5 px-16 items-center border-b-2 md:w-[1300px]">
                <div>
                    <h1 class="font-poppin text-4xl text-white">Setting Account</h1>
                </div>
                
            </div>

        </div>

                <div class="flex w-full max-h-screen justify-between">
                <SettingSideBar/>

                   
                        <slot />
                
                </div>
    </main>
</body>
  </template>