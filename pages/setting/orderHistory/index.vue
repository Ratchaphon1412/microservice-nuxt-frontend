<template>
    <div class="animate-fade-down mx-full w-full p-2">
      <div class="flex-shrink max-w-full px-4 w-[500px]">
        <p class="text-3xl font-poppin mt-3 mb-5">Order History</p>
      </div>
  
      <div class="flex flex-wrap flex-col">
  
        <div class="m-8 bg-white dark:bg-gray-800 rounded-lg shadow-lg ">
  
          <div class="flex flex-wrap flex-row mx-4">
            <div class="flex-shrink max-w-full px-4 w-full">
              <div class="md:flex md:justify-between">
                <div>
                  
                </div>
  
                <div>
                  <div id="bulk-actions">
                    <label class="flex flex-wrap flex-row">
                      <select id="bulk_actions" name="bulk_actions"
                        class="inline-block leading-5 relative py-2 ltr:pl-3 ltr:pr-8 rtl:pr-3 rtl:pl-8 mb-3 rounded bg-gray-100 border border-gray-200 overflow-x-auto focus:outline-none focus:border-gray-300 focus:ring-0 dark:text-gray-300 dark:bg-gray-700 dark:border-gray-700 dark:focus:border-gray-600 select-caret appearance-none">
                        <option>Action</option>
                        <option value="activate">In delivery</option>
                        <option value="deactivate">Sccuess</option>
                        <option value="out">"Wait Confirm "</option>
                      </select>
                      <input type="submit" id="bulk_apply"
                        class="ltr:ml-2 rtl:mr-2 py-2 px-4 inline-block text-center mb-3 rounded leading-5 border hover:bg-gray-300 dark:bg-gray-900 dark:bg-opacity-40 dark:border-gray-800 dark:hover:bg-gray-900 focus:outline-none focus:ring-0 cursor-pointer"
                        value="Apply">
                    </label>
                  </div>
                </div>
              </div>
  
              <div class="w-full mb-6 overflow-x-auto">
                <form action="">
                  <div class="dataTable-wrapper dataTable-loading no-footer sortable searchable fixed-columns">
                    <div class="dataTable-top flex flex-row justify-between m-5">
                      <div class="dataTable-search">
                        <input class="dataTable-input" placeholder="Search..." type="text">
                      </div>
                    </div>
                    <div class="dataTable-container">
                      <table
                        class="table-sorter table-bordered w-full ltr:text-left rtl:text-right text-gray-600 dark:text-gray-400 dataTable-table">
                        <thead>
                          <tr class="bg-gray-100 dark:bg-gray-900 dark:bg-opacity-40">
                            <th class="text-center" data-sortable="">
                              <a href="#" class="text-center dataTable-sorter">Order ID</a>
                            </th>
                            <th class="text-center hidden lg:table-cell" data-sortable="">
                              <a href="#" class="text-center dataTable-sorter mx-5">Date of Order</a>
                            </th>
                            <th class="text-center " data-sortable="">
                              <a href="#" class="text-center dataTable-sorter mx-5">Delivery Date</a>
                            </th>
                            <th class="text-center hidden w-1/12 lg:table-cell " data-sortable="">
                              <a href="#" class="text-center dataTable-sorter mx-5">Delivery by</a>
                            </th>
                            <th class="text-center hidden lg:table-cell " data-sortable="">
                              <a href="#" class="text-center dataTable-sorter mx-5">Link tracking</a>
                            </th>
                            <th class="text-center w-1/12" data-sortable="false">
                              <p class="text-center dataTable-sorter mx-10">Detail</p>
                            </th>
                          </tr>
                        </thead>
                        <tbody class="justify-between items-center ">
                          <tr v-for="coupon in coupons">
                            <td>
                              <p class="text-center m-2">{{ coupon.name }}</p>
                            </td>
                            <td>
                              <p class="text-center m-2">{{ coupon.code }}</p>
                            </td>
                            <td>
                              <p class="text-center m-2">{{ coupon.expire_date }}</p>
                            </td>
                            <td>
                              <p class="text-center m-2">{{ coupon.type }}</p>
                            </td>
                            <td>
                              <p class="text-center m-2">{{ coupon.discount }}</p>
                            </td>
                            <td class="text-center m-2">
                              
                              <a :href="`coupon/edit_${coupon.id}`" class="inline-block ltr:mr-2 rtl:ml-2 hover:text-green-500"
                                title="Edit">
                                <svg class="w-5 h-5 " version="1.1" id="Capa_1" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" viewBox="0 0 494.173 494.173" xml:space="preserve" fill="#000000"><g id="SVGRepo_bgCarrier" stroke-width="0"></g><g id="SVGRepo_tracerCarrier" stroke-linecap="round" stroke-linejoin="round"></g><g id="SVGRepo_iconCarrier"> <g> <g> <g> <path style="fill:#010002;" d="M0,15.506v463.161h494.173V15.506H0z M460.643,445.72H33.509V60.714h427.129 C460.643,60.714,460.643,445.72,460.643,445.72z"></path> <rect x="305.282" y="343.827" style="fill:#010002;" width="118.46" height="53.558"></rect> <rect x="305.282" y="263.748" style="fill:#010002;" width="118.46" height="53.584"></rect> <rect x="305.282" y="103.563" style="fill:#010002;" width="118.46" height="53.584"></rect> <rect x="305.282" y="183.669" style="fill:#010002;" width="118.46" height="53.605"></rect> <polygon style="fill:#010002;" points="196.895,345.735 295.539,247.086 196.895,148.395 196.895,208.849 60.147,208.849 60.147,285.328 196.895,285.328 "></polygon> </g> </g> <g> </g> <g> </g> <g> </g> <g> </g> <g> </g> <g> </g> <g> </g> <g> </g> <g> </g> <g> </g> <g> </g> <g> </g> <g> </g> <g> </g> <g> </g> </g> </g></svg>
                              </a>
                            </td>
                          </tr>
                        </tbody>
                      </table>
                      <div v-for="e in messageError">
                        <p>
                          {{ e.message }}
                        </p>
                      </div>
                    </div>
                    <div class="dataTable-bottom">
                      <div class="dataTable-info">Showing 1 to 10 of 14 entries</div>
                      <nav class="dataTable-pagination">
                        <ul class="dataTable-pagination-list">
                          <li class="active"><a href="#" data-page="1">1</a></li>
                          <li class=""><a href="#" data-page="2">2</a></li>
                          <li class="pager"><a href="#" data-page="2">›</a></li>
                        </ul>
                      </nav>
                    </div>
                  </div>
  
  
                </form>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </template>
  
  <script setup lang="ts">
  definePageMeta({
    layout: "setting-account-layout",
  });
  const { data: coupons } = await baseFetch<any>("coupon", {})
  const messageError = ref([{}])
  async function deleteCoupon(id:any) {
    const { data: coupon_delete } = await baseFetch<any>(`coupon/${id}`, {
      method: "DELETE",
    })
    if (coupon_delete.value !== null) {
          navigateTo("/dashborad/coupon")
      } else {
          messageError.value.push(couponError.value?.data)
      }
  }
  </script>