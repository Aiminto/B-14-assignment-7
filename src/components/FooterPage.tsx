import React from 'react';

const FooterPage = () => {
    return (
        <div className='mt-10 shadow-3xl'>
            <footer className="footer sm:footer-horizontal text-neutral-content items-center p-4 px-10">
                <aside className="grid-flow-col items-center">
                    <small className='text-[#1D271F] mr-10'>সকল দাম সম্ভাব্য; বাজার অবস্থার ওপর নির্ভর করে পরিবর্তিত হয়।</small>
                </aside>
                <nav className="grid-flow-col gap-4 md:place-self-center md:justify-self-end">
                   <small className='text-[#1D271F] ml-10'>বাজার দর — প্রয়োজনীয় পণ্যের দাম এক নজরে।</small>
                </nav>
            </footer>
        </div>
    );
};

export default FooterPage;