import React from 'react';

const AddServices = () => {




    return (
        <section className="p-6 dark:bg-gray-800 dark:text-gray-50">
            <form onSubmit={} className="container flex flex-col mx-auto space-y-12 ng-untouched ng-pristine ng-valid">
                <fieldset className="grid grid-cols-4 gap-6 p-6 rounded-md shadow-sm dark:bg-gray-900">
                    <div className="space-y-2 col-span-full lg:col-span-1">
                        <p className="font-medium">Add Services</p>
                        <p className="text-xs">Lorem ipsum dolor sit, amet consectetur adipisicing elit. Adipisci fuga autem eum!</p>
                    </div>
                    <div className="grid grid-cols-6 gap-4 col-span-full lg:col-span-3">
                        <div className="col-span-full sm:col-span-3">
                            <label for="firstname" className="text-sm">Service Title</label>
                            <input name='firstname' id="firstname" type="text" placeholder="Service Title" className="w-full rounded-md focus:ring p-3 focus:ring-opacity-75 focus:ring-violet-400 dark:border-gray-700 dark:text-white" />
                        </div>
                        <div className="col-span-full sm:col-span-3">
                            <label for="lastname" className="text-sm">Photo URLe</label>
                            <input name='lastname' id="lastname" type="text" placeholder="Photo URL" className="w-full rounded-md p-3 focus:ring focus:ring-opacity-75 focus:ring-violet-400 dark:border-gray-700 dark:text-white" />
                        </div>
                        <div className="col-span-full sm:col-span-3">
                            <label for="price" className="text-sm">Service Price</label>
                            <input name='price' id="price" type="text" placeholder="Service Price" className="w-full rounded-md focus:ring p-3 focus:ring-opacity-75 focus:ring-violet-400 dark:border-gray-700 dark:text-white" />
                        </div>
                        <div className="col-span-full sm:col-span-3">
                            <label for="review" className="text-sm">Service Review</label>
                            <input name='review' id="review" type="text" placeholder="Service Review" className="w-full rounded-md p-3 focus:ring focus:ring-opacity-75 focus:ring-violet-400 dark:border-gray-700 dark:text-white" />
                        </div>

                        <div className="col-span-full">
                            <label for="description" className="text-sm">Service Description</label>
                            <textarea name='description' id="description" rows='3' placeholder="Service Description" className="w-full rounded-md p-3 focus:ring focus:ring-opacity-75 focus:ring-violet-400 dark:border-gray-700 dark:text-white" spellcheck="false"></textarea>
                        </div>
                        <div>
                            <button type="submit" className="w-full px-8 py-3 font-semibold rounded-md dark:bg-violet-400 dark:text-gray-900">Submit</button>
                        </div>
                    </div>
                </fieldset>
            </form>
        </section>
    );
};

export default AddServices;