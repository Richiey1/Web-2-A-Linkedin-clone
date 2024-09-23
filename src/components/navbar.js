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
                    <main className="main-content">
        <div className="profile-sidebar">
          {/* User profile section */}
          <div className="profile-card">
            <img
              src="https://via.placeholder.com/150"
              alt="Profile"
              className="profile-picture"
            />
            <div className="profile-info">
              <h2>Ojo Damilare</h2>
              <p>
                Web 3 Researcher FrontEnd Developer Webinar UI/UX designer...
              </p>
              <p>Nigeria</p>
            </div>
            <button className="expand-button">+ Experience</button>
          </div>
          {/* Premium ad section */}
          <div className="premium-ad">
            <h3>Grow professionally with Premium</h3>
            <button className="try-premium-button">Try 1 month for NGN0</button>
          </div>
          {/* Profile stats section */}
          <div className="profile-stats">
            <div className="stat">
              <span>Profile views</span>
              <span>1</span>
            </div>
            <div className="stat">
              <span>Connections</span>
              <span>38</span>
            </div>
            <div className="stat">
              <span>Grow your network</span>
            </div>
          </div>
          {/* Navigation links section */}
          <nav className="sidebar-nav">
            <ul>
              <li>Saved items</li>
              <li>Groups</li>
              <li>Events</li>
            </ul>
          </nav>
        </div>
        <div className="feed">
          {/* "Prepare for your job search" section */}
          <div className="job-search-section">
            <h3>Prepare for your job search</h3>
            <div className="progress-bar">
              {/* Progress bar */}
            </div>
            <div className="job-search-illustration">
              {/* Illustration */}
            </div>
            <p>
              Add your work experience and skills to show your strengths to
              recruiters.
            </p>
            <button className="update-profile-button">Update profile</button>
          </div>
          {/* "Start a post" section */}
          <div className="post-creation-section">
            <h3>Start a post, try writing with AI</h3>
            <div className="post-options">
              <button className="media-button">Media</button>
              <button className="event-button">Event</button>
              <button className="write-article-button">Write article</button>
            </div>
          </div>
          {/* Feed posts */}
          <div className="posts">
            {/* Temitope Olubiire's post */}
            <div className="post">
              <div className="post-header">
                <img
                  src="https://via.placeholder.com/50"
                  alt="Profile"
                  className="post-profile-picture"
                />
                <div className="post-user-info">
                  <h3>Temitope Olubiire</h3>
                  <p>
                    Social Media Manager | Content Marketing... - 1st
                  </p>
                  <p>4d</p>
                </div>
              </div>
              <p className="post-text">
                I'm leading a protest, and you have to join me so we can win 😂
                Here's why: For too long, some employers have completely... more
              </p>
              <img
                src="https://via.placeholder.com/600x400"
                alt="Post"
                className="post-image"
              />
              <div className="post-actions">
                <div className="like-comment-share">
                  <span>49</span>
                  <button className="like-button">Like</button>
                  <button className="comment-button">Comment</button>
                  <button className="repost-button">Repost</button>
                  <button className="send-button">Send</button>
                </div>
                <span className="comments-reposts">
                  15 comments • 3 reposts
                </span>
              </div>
            </div>
          </div>
        </div>
      </main>
        </div>      
    </div>
)
}

export default Navbar;