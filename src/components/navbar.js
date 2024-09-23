import "../styles/navbar.css";


function Navbar() {
    const navLists = [
        {
            icon: <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" data-supported-dps="24x24" fill="currentColor" class="mercado-match" width="24" height="24" focusable="false">
            <path d="M23 9v2h-2v7a3 3 0 01-3 3h-4v-6h-4v6H6a3 3 0 01-3-3v-7H1V9l11-7 5 3.18V2h3v5.09z"></path>
        </svg>,
        name: "Home"
        },
        {
            icon: <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" data-supported-dps="24x24" fill="currentColor" class="mercado-match" width="24" height="24" focusable="false">
            <path d="M12 16v6H3v-6a3 3 0 013-3h3a3 3 0 013 3zm5.5-3A3.5 3.5 0 1014 9.5a3.5 3.5 0 003.5 3.5zm1 2h-2a2.5 2.5 0 00-2.5 2.5V22h7v-4.5a2.5 2.5 0 00-2.5-2.5zM7.5 2A4.5 4.5 0 1012 6.5 4.49 4.49 0 007.5 2z"></path>
        </svg>,
        name: "My Network"
        },
        {
            icon: <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" data-supported-dps="24x24" fill="currentColor" class="mercado-match" width="24" height="24" focusable="false">
            <path d="M17 6V5a3 3 0 00-3-3h-4a3 3 0 00-3 3v1H2v4a3 3 0 003 3h14a3 3 0 003-3V6zM9 5a1 1 0 011-1h4a1 1 0 011 1v1H9zm10 9a4 4 0 003-1.38V17a3 3 0 01-3 3H5a3 3 0 01-3-3v-4.38A4 4 0 005 14z"></path>
        </svg>,
        name: "Jobs"
        },
        {
            icon: <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" data-supported-dps="24x24" fill="currentColor" class="mercado-match" width="24" height="24" focusable="false">
            <path d="M16 4H8a7 7 0 000 14h4v4l8.16-5.39A6.78 6.78 0 0023 11a7 7 0 00-7-7zm-8 8.25A1.25 1.25 0 119.25 11 1.25 1.25 0 018 12.25zm4 0A1.25 1.25 0 1113.25 11 1.25 1.25 0 0112 12.25zm4 0A1.25 1.25 0 1117.25 11 1.25 1.25 0 0116 12.25z"></path>
        </svg>,
        name: "Messaging"
        },
        {
            icon: <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" data-supported-dps="24x24" fill="currentColor" class="mercado-match" width="24" height="24" focusable="false">
            <path d="M22 19h-8.28a2 2 0 11-3.44 0H2v-1a4.52 4.52 0 011.17-2.83l1-1.17h15.7l1 1.17A4.42 4.42 0 0122 18zM18.21 7.44A6.27 6.27 0 0012 2a6.27 6.27 0 00-6.21 5.44L5 13h14z"></path>
        </svg>,
        name: "Notifications"
        },
    ]
    return (
        <div className="nav-container">
            {/* The left side of the navbar */}
            <div className="nav-container-left">
                {/*<box-icon className type='logo' name='linkedin-square' size={"lg"} color={"#0a66c2"} ></box-icon>*/}
                <svg className="nav-icon" xmlns="http://www.w3.org/2000/svg" width="48" height="48" viewBox="0 0 24 24" style={{ fill: "#0a66c2", transform: ";msFilter:;" }}><path d="M20 3H4a1 1 0 0 0-1 1v16a1 1 0 0 0 1 1h16a1 1 0 0 0 1-1V4a1 1 0 0 0-1-1zM8.339 18.337H5.667v-8.59h2.672v8.59zM7.003 8.574a1.548 1.548 0 1 1 0-3.096 1.548 1.548 0 0 1 0 3.096zm11.335 9.763h-2.669V14.16c0-.996-.018-2.277-1.388-2.277-1.39 0-1.601 1.086-1.601 2.207v4.248h-2.667v-8.59h2.56v1.174h.037c.355-.675 1.227-1.387 2.524-1.387 2.704 0 3.203 1.778 3.203 4.092v4.71z"></path></svg>
                <span className="nav-search">
                <svg className="nav-search-icon" xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" style={{ fill: "#0a66c2", transform: ";msFilter:;" }}><path d="M10 18a7.952 7.952 0 0 0 4.897-1.688l4.396 4.396 1.414-1.414-4.396-4.396A7.952 7.952 0 0 0 18 10c0-4.411-3.589-8-8-8s-8 3.589-8 8 3.589 8 8 8zm0-14c3.309 0 6 2.691 6 6s-2.691 6-6 6-6-2.691-6-6 2.691-6 6-6z"></path></svg>
                <input type="search" placeholder="search"  />
                </span>
            </div>

            {/* The center of the navbar */}
            <div className="nav-container-center">
                <nav className="navbar-items">
                    {
                        navLists.map((eachNavList, index) => (
                            <a href="/" key={index}>
                                {eachNavList.icon}
                                <div>{eachNavList.name}</div>
                            </a>
                        ))
                    }
                </nav>
            </div>


            <div className="nav-container-right ">
               <div className="for-business-container">
                    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" data-supported-dps="24x24" fill="currentColor" class="mercado-match" width="24" height="24" focusable="false">
                            <path d="M3 3h4v4H3zm7 4h4V3h-4zm7-4v4h4V3zM3 14h4v-4H3zm7 0h4v-4h-4zm7 0h4v-4h-4zM3 21h4v-4H3zm7 0h4v-4h-4zm7 0h4v-4h-4z"></path>
                    </svg>
                    <div className="for-business-text">
                        For business
                        <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" style={{ fill: "rgba(0, 0, 0, 0.6)", transform: ";msFilter:;" }}><path d="M11.178 19.569a.998.998 0 0 0 1.644 0l9-13A.999.999 0 0 0 21 5H3a1.002 1.002 0 0 0-.822 1.569l9 13z"></path>
                        </svg>
                    </div>
                </div>
                    <div className="premium-container">
                        <span className="orange-box"></span>
                        <span>Try for NGN0: <br />Premium</span>
                    </div>  
                    <main className="flex flex-col items-center w-full max-w-7xl mx-auto mt-4">
                       <div className="flex w-full">
                            <aside className="w-1/4 bg-white p-4 rounded-lg shadow-sm">
                            <div className="flex items-center">
                                <img alt="Profile Picture" className="h-16 w-16 rounded-full"  src="https://media.licdn.com/dms/image/v2/D4D03AQHxqg0yT1EXiA/profile-displayphoto-shrink_200_200/profile-displayphoto-shrink_200_200/0/1713555361464?e=1732752000&amp;v=beta&amp;t=4JsZnh_qf1aroB8ZKlOT1467BXqED3r8gFUiu_wxkaI" loading="lazy" height="64" id="ember329"  />
                                <div className="ml-4">
                                    <h2 className="text-lg font-medium">
                                        Ojo Damilare
                                    </h2>
                                    <p className="text-sm text-gray-500">
                                        Web 3 Researcher FrontEnd Developer Webinar UI/UX designer...
                                        <br />
                                        Nigeria
                                    </p>
                                </div>
                            </div>
                            <div className="mt-4">
                                <button className="w-full bg-blue-600 text-white py-2 rounded-lg">
                                    Try 1 month for NGN0
                                </button>
                            </div>
                            <div className="mt-4">
                                <p className="text-sm text-gray-500">
                                    Profile viewers
                                  <span className="font-medium"> 1 </span>
                                </p>
                                <p className="text-sm text-gray-500">
                                    Connections
                                  <span className="font-medium"> 38 </span>
                                </p>
                                <p className="text-sm text-gray-500">
                                    Grow your network
                                </p>
                            </div>
                            <div className="mt-4">
                            <ul className="space-y-2">
                            <li>
                                <a className="text-sm text-gray-500" href="#">
                                    Saved items
                                </a>
                            </li>
                            <li>
                                <a className="text-sm text-gray-500" href="#">
                                    Groups
                                </a>
                            </li>
                            <li>
                                <a className="text-sm text-gray-500" href="#">
                                    Events
                                </a>
                            </li>
                            </ul>
                        </div>
                        </aside>
                        <section className="w-3/4 ml-4">
                            <div className="bg-white p-4 rounded-lg shadow-sm mb-4">
                                <h2 className="text-lg font-medium">
                                    Prepare for your job search
                                </h2>
                                <div className="mt-2">
                                <div className="flex items-center">
                                <div className="w-full bg-gray-200 rounded-full h-2.5">
                                <div className="bg-blue-600 h-2.5 rounded-full" style={{ width: '50%' }} />
                            </div>
                            <span className="ml-2 text-sm text-gray-500">
                                2/4 complete
                            </span>
                            </div>
                            <p className="mt-2 text-sm text-gray-500">
                                Add your work experience and skills to show your strengths to recruiters.
                            </p>
                            <button className="mt-2 bg-blue-600 text-white py-2 px-4 rounded-lg">
                                Update profile
                            </button>
                            </div>
                        </div>
                        <div className="bg-white p-4 rounded-lg shadow-sm mb-4">
                        <div className="flex items-center">
                            <img alt="Profile Picture" classname="h-10 w-10 rounded-full" height="40" src="https://oaidalleapiprodscus.blob.core.windows.net/private/org-LmQ09WWGIGwOeeA4ArnRw0x5/user-uJPET5fjNenSso8wCETWVNOp/img-l2FVNP6IImjTPKPMzYBARAwK.png?st=2024-09-22T18%3A24%3A41Z&amp;se=2024-09-22T20%3A24%3A41Z&amp;sp=r&amp;sv=2024-08-04&amp;sr=b&amp;rscd=inline&amp;rsct=image/png&amp;skoid=d505667d-d6c1-4a0a-bac7-5c84a87759f8&amp;sktid=a48cca56-e6da-484e-a814-9c849652bcb3&amp;skt=2024-09-21T23%3A32%3A51Z&amp;ske=2024-09-22T23%3A32%3A51Z&amp;sks=b&amp;skv=2024-08-04&amp;sig=DCYHFR8IJAppuyTe4/wPTuOGN39wXbqKS1tZlfgwWLU%3D" width="40"/>
                            <input className="ml-4 w-full bg-gray-100 p-2 rounded-lg" placeholder="Start a post, try writing with AI" type="text" />
                        </div>    
                        <div className="flex justify-between mt-2">
                        <button className="flex items-center text-gray-500">
                            <i className="fas fa-photo-video mr-2"></i>
                            Media
                        </button>
                        <button className="flex items-center text-gray-500">
                            <i className="fas fa-calendar-alt mr-2"></i>
                            Event
                        </button>
                        <button className="flex items-center text-gray-500">
                            <i className="fas fa-file-alt mr-2"></i>
                            Write article
                        </button>
                    </div>
                    </div>
                    <div className="bg-white p-4 rounded-lg shadow-sm mb-4">
                        <div className="flex items-center">
                            <img alt="Profile Picture" classname="h-10 w-10 rounded-full" height="40" src="https://oaidalleapiprodscus.blob.core.windows.net/private/org-LmQ09WWGIGwOeeA4ArnRw0x5/user-uJPET5fjNenSso8wCETWVNOp/img-l2FVNP6IImjTPKPMzYBARAwK.png?st=2024-09-22T18%3A24%3A41Z&amp;se=2024-09-22T20%3A24%3A41Z&amp;sp=r&amp;sv=2024-08-04&amp;sr=b&amp;rscd=inline&amp;rsct=image/png&amp;skoid=d505667d-d6c1-4a0a-bac7-5c84a87759f8&amp;sktid=a48cca56-e6da-484e-a814-9c849652bcb3&amp;skt=2024-09-21T23%3A32%3A51Z&amp;ske=2024-09-22T23%3A32%3A51Z&amp;sks=b&amp;skv=2024-08-04&amp;sig=DCYHFR8IJAppuyTe4/wPTuOGN39wXbqKS1tZlfgwWLU%3D" width="40"/>
                        <div className="ml-4">
                            <h3 className="text-sm font-medium">
                                Temitope Olubire
                            </h3>
                            <p className="text-sm text-gray-500">
                                Social Media Manager | Content Marketing...
                            </p>
                            <p className="text-sm text-gray-500">
                                4d
                            </p>
                        </div>
                    </div>
                    <p className="mt-2 text-sm">
                        I'm leading a protest, and you have to join me so we can win 😉
                    </p>
                    <p className="mt-2 text-sm">
                        Here's why: For too long, some employers have completely ...more
                    </p>
                    <img alt="Person standing in front of a building" classname="mt-2 w-full rounded-lg" height="400" src="https://oaidalleapiprodscus.blob.core.windows.net/private/org-LmQ09WWGIGwOeeA4ArnRw0x5/user-uJPET5fjNenSso8wCETWVNOp/img-YsC09ihGd6FVuUZRRIMOpipR.png?st=2024-09-22T18%3A24%3A44Z&amp;se=2024-09-22T20%3A24%3A44Z&amp;sp=r&amp;sv=2024-08-04&amp;sr=b&amp;rscd=inline&amp;rsct=image/png&amp;skoid=d505667d-d6c1-4a0a-bac7-5c84a87759f8&amp;sktid=a48cca56-e6da-484e-a814-9c849652bcb3&amp;skt=2024-09-21T23%3A37%3A39Z&amp;ske=2024-09-22T23%3A37%3A39Z&amp;sks=b&amp;skv=2024-08-04&amp;sig=VMvJJBUZXnST/G8RC%2By3p8nUkQVCc9ww0cn46sknk7Q%3D" width="600"/>
                    <div className="flex justify-between mt-2">
                        <button className="flex items-center text-gray-500">
                            <i className="fas fa-thumbs-up mr-2"></i>
                            Like
                        </button>
                        <button className="flex items-center text-gray-500">
                            <i className="fas fa-comment-alt mr-2"></i>
                            Comment
                        </button>
                        <button className="flex items-center text-gray-500">
                            <i className="fas fa-share mr-2"></i>
                            Repost
                        </button>
                        <button className="flex items-center text-gray-500">
                            <i className="fas fa-paper-plane mr-2"></i>
                            Send
                        </button>
                        </div>
                    </div>
                    <div className="bg-white p-4 rounded-lg shadow-sm mb-4">
                        <div className="flex items-center">
                            <img alt="AWS Logo" classname="h-10 w-10 rounded-full" height="40" src="https://oaidalleapiprodscus.blob.core.windows.net/private/org-LmQ09WWGIGwOeeA4ArnRw0x5/user-uJPET5fjNenSso8wCETWVNOp/img-GM1ULsLwFBE97jvNmPyj8b2X.png?st=2024-09-22T18%3A24%3A42Z&amp;se=2024-09-22T20%3A24%3A42Z&amp;sp=r&amp;sv=2024-08-04&amp;sr=b&amp;rscd=inline&amp;rsct=image/png&amp;skoid=d505667d-d6c1-4a0a-bac7-5c84a87759f8&amp;sktid=a48cca56-e6da-484e-a814-9c849652bcb3&amp;skt=2024-09-21T23%3A23%3A19Z&amp;ske=2024-09-22T23%3A23%3A19Z&amp;sks=b&amp;skv=2024-08-04&amp;sig=4tomWYbo2uiTCO1fqYDd8DNlE5xoUYS28fwLZD8iLPU%3D" width="40"/>
                            <div className="ml-4">
                            <h3 className="text-sm font-medium">
                                AWS Training &amp; Certification
                            </h3>
                            <p className="text-sm text-gray-500">
                                1,211,304 followers
                            </p>
                            <p className="text-sm text-gray-500">
                                Promoted
                            </p>
                        </div>
                    </div>
                    <p className="mt-2 text-sm">
                        AWS is launching a free training to help you build in-demand skills. Learn the cloud foundations, job roles, and more - get ready to ...more
                    </p>
                    <img alt="Person standing in front of a plant and a camera" classname="mt-2 w-full rounded-lg" height="400" src="https://oaidalleapiprodscus.blob.core.windows.net/private/org-LmQ09WWGIGwOeeA4ArnRw0x5/user-uJPET5fjNenSso8wCETWVNOp/img-otJ1Y2BZmEV83o1gpvgBDup9.png?st=2024-09-22T18%3A24%3A41Z&amp;se=2024-09-22T20%3A24%3A41Z&amp;sp=r&amp;sv=2024-08-04&amp;sr=b&amp;rscd=inline&amp;rsct=image/png&amp;skoid=d505667d-d6c1-4a0a-bac7-5c84a87759f8&amp;sktid=a48cca56-e6da-484e-a814-9c849652bcb3&amp;skt=2024-09-21T23%3A33%3A52Z&amp;ske=2024-09-22T23%3A33%3A52Z&amp;sks=b&amp;skv=2024-08-04&amp;sig=LmJsuU8gvLQbKGPPEVUTnbISBsNTUsCiNLDkhLmg3IM%3D" width="600"/>
                    </div>
                </section>
                </div>
            </main>
        </div>      
    </div>
)
}

export default Navbar;