

const Testimonial = () => {
    return (
        <div className="px-5 md:px-10 lg:px-20 my-20">
            <h1 className="font-Poppins font-medium text-2xl md:text-3xl lg:text-4xl mb-4">Testimonial</h1>
            <p className="font-Manrope text-md lg:text-lg text-[#334155] mb-10">We provide exceptional support and resources to make your study abroad journey smooth and successful.</p>

            <div className="grid grid-cols-1 lg:grid-cols-3">

                <div className="bg-indigo-500 text-center rounded-t-xl md:rounded-l-xl  lg:rounded-l-xl p-12 lg:col-span-2">
                    <h2 className="text-white text-2xl font-normal mb-10">“Working with Master in me has been an incredibly painless and enjoyable experience.”</h2>
                    <div>
                        <p className="text-white text-lg font-medium">Manuel Rikob <span className="text-[#CBD5E1] font-normal text-lg">CEO of Intel</span> </p>
                    </div>

                </div>

                <div className="lg:col-span-1">
                    <video className="h-full w-full rounded-bl-xl rounded-br-xl  md:rounded-l-xl lg:rounded-r-xl " controls>
                        <source src="https://s3-figma-videos-production-sig.figma.com/video/1092507431873997461/TEAM/2d1a/4627/-84e5-4b60-8252-ccd95b82c4a2?Expires=1734307200&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4&Signature=Yk160XUOc6X3lg-sH7TdY76h7ATnY566hA4bHfY6su80lUEEYtRTVCvr9Rr4qnLBRW~O5djad-oKBgQfahoELO3lu7voy6q6RmGmG8SnRLlW4wU8Z9FLdslSRDNKUyTVti6sZSz6~rQtaobGAJvVpZoW3L6avi0G5XGYGnjM2uyId8RhUTKC0tb2~lvPg9llzMuSyz29tVk1sSvOTR38ErMPtc7B89lXvV0OtSgA6o5JaHa0G~XBRdLHxaQP6MfDDZuAGnWTyRKcckV3k2SNuB8nCuksQiyzKBBdJhPhjpx~soqiYkqwwsb59pui0I~YyFQXc-W-4npxRAm3KjoH2w__" type="video/mp4" />
                        Your browser does not support the video tag.
                    </video>
                </div>
            </div>
        </div>
    );
};

export default Testimonial;