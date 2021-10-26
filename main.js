const homePage = () => {
  return `<header>
      <div class="header-wrapper">
          <div class="header-title">
              <h1><span>find</span> the best <span>talent</span></h1>
          </div>
          <div class="header-description">
              <p>
                  Finding the right people and building high performing teams can be hard. Most companies aren’t
                  tapping into the abundance of global talent. We’re about to change that.
              </p>
          </div>
      </div>
  </header>
  <section id='details'>
      <div class="details-wrapper">
          <div class="details-title">
              <div class="pink-line"></div>
              <h2>
                  <span>build</span> & manage distributed teams like no one else.
              </h2>
          </div>
  
          <ul class="details-cards">
              <li class="detail-card">
                  <div>
                      <img src="assets/icons/icon-person.svg" alt="" />
                  </div>
                  <div>
                      <h3 class="card-title">experienced individuals</h3>
                      <p class="card-description">
                          our network is made up of highly experienced professionals who are passionate about what
                          they do.
                      </p>
                  </div>
  
              </li>
              <li class="detail-card">
                  <div>
                      <img src="assets/icons/icon-cog.svg" alt="" />
                  </div>
                  <div>
                      <h3 class="card-title">easy to implement</h3>
                      <p class="card-description">
                          our processes have been refined over years of implementation meaning our teams always
                          deliver.
                      </p>
                  </div>
              </li>
              <li class="detail-card">
                  <div>
                      <img src="assets/icons/icon-chart.svg" alt="" />
                  </div>
                  <div>
                      <h3 class="card-title">enhanced productivity</h3>
                      <p class="card-description">
                          our customized platform with in-built analytics helps you manage your distributed teams.
                      </p>
                  </div>
              </li>
          </ul>
      </div>
  </section>
  <section id='testimonials' >
      <div class="test-wrapper" ">
          <h2 class=" test-title">Delivering real results for top companies. <span class='capitalize'>some</span>
          of our <span>success stories.</span>
          </h2>
          <ul class="test-cards">
              <li class="test-card">
                  <p class="test-description">
                      “the team perfectly fit the specialized skill set required. They focused on the most
                      essential features helping us launch the platform eight months faster than planned.”
                  </p>
                  <p class="test-name"><span id='db-name1'></span></p>
                  <p class="test-job"><span id='db-job1'></span></p>
                  <img src="assets/icons/avatar-kady.jpg" alt="" />
              </li>
              <li class="test-card">
                  <p class="test-description">
                      “we needed to automate our entire onboarding process. The team came in and built out the
                      whole journey. <span class='capitalize'>Since</span> going live, user retention has gone
                      through the roof!”
                  </p>
                  <p class="test-name" id='db-name2'></p>
                  <p class="test-job"><span id='db-job2'></span></p>
                  <img src="assets/icons/avatar-aiysha.jpg" alt="" />
              </li>
              <li class="test-card">
                  <p class="test-description">
                      “the team perfectly fit the specialized skill set required. They focused on the most
                      essential features helping us launch the platform eight months faster than planned.”
                  </p>
                  <p class="test-name"><span id='db-name3'></span></p>
                  <p class="test-job"><span id='db-job3'></span></p>
                  <img src="assets/icons/avatar-arthur.jpg" alt="" />
              </li>
          </ul>
      </div>
  </section>
  <section id="banner">
      <div class="banner-wrapper">
          <h2 class="banner-title">Ready to get started?</h2>
          <a class="banner-btn">contact us</a>
      </div>
  </section>
  <footer>
      <div class="footer-wrapper">
          <div class="footer-left">
              <div class="footer-l-l">
                  <a href="#"><img class="footer-logo" src="assets/icons/logo.svg" alt="logo" /></a>
                  <ul class='footer-links'>
                      <li class="footer-link">
                          <a href="#home" class="">home</a>
                      </li>
                      <li class="footer-link">
                          <a href="#about" class="">about</a>
                      </li>
                  </ul>
              </div>
              <div class="footer-l-r">
                  <p>987 hillcrest lane</p>
                  <p>irvine, <span>ca</span></p>
                  <p>california 92714</p>
                  <p>call us : 949-833-7432</p>
              </div>
          </div>
          <div class="footer-right">
              <div class="footer-socials">
                  <img src="/assets/icons/icon-facebook.svg" alt="facebook">
                  <img src="/assets/icons/icon-pinterest.svg" alt="pinterest">
                  <img src="/assets/icons/icon-twitter.svg" alt="twitter">
              </div>
              <div class="footer-r-cr">
                  copyright 2020. all rights reserved
              </div>
          </div>
      </div>
  </footer>
  `;
};

const aboutPage = () => {
  return `
    <section id="about">
        <div class="about-wrapper">
            <h1 class="about-title">About</h1>
            <div class="about-description">
                We help companies build dynamic teams made up of top global talent. Using our network of passionate
                professionals we drive innovation and deliver incredible outcomes. Talented, diverse teams shape the
                best products and experiences. We’ll bring those teams to you.
            </div>
        </div>
    </section>

    <section id="directors">
        <h2 class="dir-title">Meet the directors</h2>
        <div class="dir-wrapper">
            <div class="dir-card">
                <div class="dir-card-content">
                    <div class="dir-avatar">
                        <img src="/assets/icons/avatar-nikita.jpg" alt="Nikita Marks photo" />
                    </div>
                    <div class="dir-name">Nikita Marks</div>
                    <div class="dir-job">Founder & CEO</div>
                </div>
                <div class="dir-card-plus">
                    <div class="dir-card-plus-wrapper">
                        <img src="/assets/icons/icon-cross.svg" alt="">
                    </div>
                </div>
            </div>

            <div class="dir-card">
                <div class="dir-card-content">
                    <div class="dir-avatar">
                        <img src="/assets/icons/avatar-christian.jpg" alt="Nikita Marks photo" />
                    </div>
                    <div class="dir-name">Cristian Duncan
                    </div>
                    <div class="dir-job">Co-founder & COO
                    </div>
                </div>
                <div class="dir-card-plus">
                    <div class="dir-card-plus-wrapper">
                        <img src="/assets/icons/icon-cross.svg" alt="">
                    </div>
                </div>
            </div>

            <div class="dir-card">
                <div class="dir-card-content">
                    <div class="dir-avatar">
                        <img src="/assets/icons/avatar-cruz.jpg" alt="Nikita Marks photo" />
                    </div>
                    <div class="dir-name">Cruz Hamer</div>
                    <div class="dir-job">Co-founder & CTO</div>
                </div>
                <div class="dir-card-plus">
                    <div class="dir-card-plus-wrapper">
                        <img src="/assets/icons/icon-cross.svg" alt="">
                    </div>
                </div>
            </div>

            <div class="dir-card">
                <div class="dir-card-content">
                    <div class="dir-avatar">
                        <img src="/assets/icons/avatar-drake.jpg" alt="Nikita Marks photo" />
                    </div>
                    <div class="dir-name">Drake Heaton</div>
                    <div class="dir-job">Business Development Lead</div>
                </div>
                <div class="dir-card-plus">
                    <div class="dir-card-plus-wrapper">
                        <img src="/assets/icons/icon-cross.svg" alt="" />
                    </div>
                </div>
            </div>

            <div class="dir-card">
                <div class="dir-card-content">
                    <div class="dir-avatar">
                        <img src="/assets/icons/avatar-griffin.jpg" alt="Nikita Marks photo" />
                    </div>
                    <div class="dir-name">Griffin Wise</div>
                    <div class="dir-job">Lead Marketing</div>
                </div>
                <div class="dir-card-plus">
                    <div class="dir-card-plus-wrapper">
                        <img src="/assets/icons/icon-cross.svg" alt="" />
                    </div>
                </div>
            </div>

            <div class="dir-card">
                <div class="dir-card-content">
                    <div class="dir-avatar">
                        <img src="/assets/icons/avatar-aden.jpg" alt="Nikita Marks photo" />
                    </div>
                    <div class="dir-name">Aden Allan</div>
                    <div class="dir-job">Head of Talent</div>
                </div>
                <div class="dir-card-plus">
                    <div class="dir-card-plus-wrapper">
                        <img src="/assets/icons/icon-cross.svg" alt="" />
                    </div>
                </div>
            </div>
        </div>
    </section>

    <footer id='about-footer'>
        <div class="about-footer-wrapper">
            <div class="footer-title">
                <h2>some of our clients</h2>
            </div>
            <div class="footer-clients">
                <img src="/assets/icons/logo-the-verge.png" alt="" />
                <img src="/assets/icons/logo-jakarta-post.png" alt=""/>
                <img src="/assets/icons/logo-the-guardian.png" alt=""/>
                <img src="/assets/icons/logo-tech-radar.png" alt=""/>
                <img src="/assets/icons/logo-gadgets-now.png" alt=""/>
            </div>
        </div>
    </footer>
    `;
};

const contactPage = () => {
  return `<section id="contact">
              <div class="contact-wrapper">
                  <div class="contact-left">
                      <h2>Contact</h2>
                      <h3>Ask us about</h3>
                      <ul class="contact-cards">
                          <li class="contact-card">
                              <div>
                                  <img src="assets/icons/icon-person.svg" alt="" />
                              </div>
                              <div>
                                  <h3 class="card-title">The quality of our talent network.</h3>
                              </div>
                          </li>
                          <li class="contact-card">
                              <div>
                                  <img src="assets/icons/icon-cog.svg" alt="" />
                              </div>
                              <div>
                                  <h3 class="card-title">Usage & implementation of our software</h3>
                              </div>
                          </li>
                          <li class="contact-card">
                              <div>
                                  <img src="assets/icons/icon-chart.svg" alt="" />
                              </div>
                              <div>
                                  <h3 class="card-title">How we help drive innovation</h3>
                              </div>
                          </li>
                      </ul>
                  </div>
                  <div class="contact-right" >
                      <form id="contact-form">
                          <input name="from_name" placeholder="Name"   type="text">
                          <input name="from_email" placeholder="Email"  type="email">
                          <input name="from_company" placeholder="Company Name" id="company" type="text">
                          <input name="from_subject" placeholder="Title" id="subject"  type="text">
                          <textarea name="message" id="" cols="30" rows="10" placeholder="Message"></textarea>
                          <button type="submit" value="Send" onclick="send()">submit</button>
                          </button>
                      </form>
                  </div>
              </div>
          </section>
          <footer>
              <div class="footer-wrapper">
                  <div class="footer-left">
                      <div class="footer-l-l">
                          <a href="#"><img class="footer-logo" src="assets/icons/logo.svg" alt="logo" /></a>
                          <ul class='footer-links'>
                              <li class="footer-link">
                                  <a href="#home" class="">home</a>
                              </li>
                              <li class="footer-link">
                                  <a href="#about" class="">about</a>
                              </li>
                          </ul>
                      </div>
                      <div class="footer-l-r">
                          <p>987 hillcrest lane</p>
                          <p>irvine, <span>ca</span></p>
                          <p>california 92714</p>
                          <p>call us : 949-833-7432</p>
                      </div>
                  </div>
                  <div class="footer-right">
                      <div class="footer-socials">
                          <img src="/assets/icons/icon-facebook.svg" alt="facebook">
                          <img src="/assets/icons/icon-pinterest.svg" alt="pinterest">
                          <img src="/assets/icons/icon-twitter.svg" alt="twitter">
                      </div>
                      <div class="footer-r-cr">
                          copyright 2020. all rights reserved
                      </div>
                  </div>
              </div>
          </footer>
      </div>
      `;
};

const about = (document.getElementById('root').innerHTML = aboutPage());
const contact = (document.getElementById('root').innerHTML = contactPage());
const home = (document.getElementById('root').innerHTML = homePage());

const routes = {
  '/': home,
  '/contact': contact,
  '/about': about,
};

const rootDiv = document.getElementById('root');

const onNavigate = (_pathname) => {
  history.replaceState(null, null, _pathname);
  history.pushState(null, _pathname, _pathname);
  rootDiv.innerHTML = routes[_pathname];
};

window.onpopstate = () => {
  history.replaceState(null, null, ' ');
  rootDiv.innerHTML = routes[window.location.pathname];
};
