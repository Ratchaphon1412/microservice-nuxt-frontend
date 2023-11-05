<template>
<!-- sticky sidebar -->
<nav class="hidden md:w-44 lg:w-64 py-4 md:block">
        <div class="sticky top-12 flex flex-col gap-2 p-2 border-r-4 ">

            <AdminSideBarLink to ="/dashborad"> Dash Board</AdminSideBarLink>
            <AdminSideBarLink to ="/dashborad/productList"> Product</AdminSideBarLink>
            <AdminSideBarLink to ="/dashborad/coupon"> Coupon Code</AdminSideBarLink>
            <AdminSideBarLink to ="/dashborad/orderList"> Order lists</AdminSideBarLink>
            
        </div>
    </nav>
</template>
