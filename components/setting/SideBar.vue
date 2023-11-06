<template>
<!-- sticky sidebar -->
<nav class="hidden md:w-44 lg:w-64 py-4 md:block">
        <div class="sticky top-12 flex flex-col gap-2 p-2 border-r-4 ">
            <SettingSideBarLink to="/setting"> Profile</SettingSideBarLink>
            <SettingSideBarLink to="/setting/editProfile"> Edit Profile</SettingSideBarLink>
            <SettingSideBarLink to="/setting/address"> Address</SettingSideBarLink>
            <SettingSideBarLink to="/setting/orderHistory"> Orders History</SettingSideBarLink>
            <SettingSideBarLink to="/setting/payment/creditCard"> My Payment</SettingSideBarLink>
        </div>
    </nav>
</template>
