Ext.regModel('Product', {
    fields: ['name', 'price', 'vendor']
});

ListDemo.ListStore = new Ext.data.Store({
    model: 'Product',
    sorters: 'name',
    getGroupString : function(record) {
        return record.get('vendor');
    },
    data: [
        { name: "iPhone 3G 8GB",  price: 600.00, vendor: "Apple", description: "With fast 3G wireless technology, GPS mapping, support for enterprise features like Microsoft Exchange, and the new App Store, Apple iPhone Black 8GB mobile phone 3G puts even more features at your fingertips. Like the original iPhone, a combination of three products in one revolutionary phone, a widescreen iPod, and a breakthrough Internet device with rich HTML email and a desktop-class web browser. The Apple iPhone 8GB mobile phone 3G. It redefines what a mobile phone can do again. The 2.0 software is, in many ways, the most important feature of the iPhone 3G. And it's excellent. The extra width also makes typing on the iPhone with two thumbs slightly more comfortable by giving the thumbs a bit more room on which to roam. As this Apple iPhone Black 8GB mobile phone is sim free even after any iTunes or updates this phone will NEVER Lock unlike many others on the market."},
        { name: "iPhone 4 16GB (black)",  price: 700.0, vendor: "Apple", description: "Product Description 3.5'' TFT capacitive display, Scratch-resistant surface, Multi-touch input method, Accelerometer, Proximity, Three-axis sensor, 32 GB, Wi-Fi 802.11 b/g/n, Two Cameras, GPS, Multitasking capable, A4 CPU Product Features * Does not include AT&T service contract * Facetime * Retina Display * Multitasking * HD Video Recording * 5MP Camera" },
        { name: "iPhone 4 32GB (white)",  price: 700.0, vendor: "Apple", description: "Product Description 3.5'' TFT capacitive display, Scratch-resistant surface, Multi-touch input method, Accelerometer, Proximity, Three-axis sensor, 32 GB, Wi-Fi 802.11 b/g/n, Two Cameras, GPS, Multitasking capable, A4 CPU Product Features * Does not include AT&T service contract * Facetime * Retina Display * Multitasking * HD Video Recording * 5MP Camera" },
        { name: "Desire Z",  price: 500.0, vendor: "HTC", description: "What's more important to you - a super responsive touch screen that lets you surf the web with a mere touch or a dedicated keyboard for quickly shooting off texts or emails? With the HTC Desire Z you get both. The 3.7 inch touch screen is perfect for browsing the web, checking your friends' latest updates, or catching up on email. Ready to do some serious messaging? Pop open the keyboard - the keys are nicely spaced and raised for fast comfortable typing." },
        { name: "Desire S",  price: 300.0, vendor: "HTC", description: "HTC's Desire S is the successor to their award-winning Desire, one of 2010's best-selling smartphones. The Desire S has evolved to be slimmer and stronger, offering faster, smarter web browsing and the ability to record your memories in HD. Sporting HTC's signature unibody, built from a single piece of aluminium with plastic for the aerial and battery covers, it's smooth, strong enough to handle some abuse and has a reassuringly high-quality feel in your hands. Designed and built to be a market-leader, this HTC phone is a classy, high-powered addition to their range. The HTC Desire S phone benefits from an exceptional user experience, thanks to HTC's intuitive Sense customisation of the Android operating system and the powerful 1.2GHz Snapdragon processor with 768MB of RAM under the hood that lets you do more, faster. This phone also packs in a 3.7 inch touchscreen with strong, vibrant colours and great definition, a 5 megapixel camera that's boasts auto-focus, an LED flash and 720p HD video recording and a front-facing camera to make video calls." }
    ]

});



console.log(ListDemo.ListStore.data);
