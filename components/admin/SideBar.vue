<template>
<!-- sticky sidebar -->
<nav class="hidden md:w-44 lg:w-64 py-4 md:block">
        <div class="sticky top-12 flex flex-col gap-2 p-2 border-r-4 ">
            <AdminSideBarLink to="/dashboard"> Dash Board</AdminSideBarLink>
            <AdminSideBarLink to="/dashboard/productList"> Product</AdminSideBarLink>
            <AdminSideBarLink to="/dashboard/orderList"> Order lists</AdminSideBarLink>
        </div>
    </nav>
</template>
