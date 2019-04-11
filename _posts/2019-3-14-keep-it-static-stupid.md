---
layout: post
title: Keep it Static Stupid — Simple Sites Make Happy Clients
subtitle_body: 'How to build faster, leaner, and safer websites without a database.'
author: chad
_date: 02/14/2019
masthead:
  img_path: /upload/image/jpeg/1553254616673_img_path_static-intro.jpeg
  pat_path: null
  overlay: true
categories:
  - news
tags:
  - houndstooth
  - bowtie.co
  - web development
  - static sites
elsewhere:
  name: Medium
  url: >-
    https://medium.com/no-buffer/keep-it-static-stupid-simple-sites-make-happy-clients-960d49ccfdb4
comments: false
share: true
featured: false
published: true
excerpt_separator: <!-- more -->
permalink: /why-you-should-develop-static-website/
redirect_from:
  - /2019-3-14-keep-it-static-stupid/
seo:
  title: Keep it Static Stupid
  description: The case for building simpler websites with the Houndstooth open source CMS
  canonical: >-
    https://medium.com/no-buffer/keep-it-static-stupid-simple-sites-make-happy-clients-960d49ccfdb4
  noindex: false
social:
  title: Keep it Static Stupid
  description: The case for building simpler websites with the Houndstooth open source CMS
  img_path: null

---
<p>The internet is broken. We arrived here mostly as a matter of habit &mdash; a pattern that needs to change.</p>
<h3>Your workflow is the&nbsp;problem</h3>
<p>A few years back (15?) developers and designers were introduced to an amazing, paradigm-shifting technology called a CMS (content management system). You know many of them by name (WordPress, Drupal, Joomla, etc.), and today they house a significant share of the web&rsquo;s content.</p>
<p>Why did the CMS take over? Before them most pages were written very simply &mdash; with a text editor. Content had to be manually updated on every page, and developers needed to keep track of every change to make sure that repeated elements were updated throughout a site.</p>
<!-- more -->
<p>A CMS was a convenient new way to build a website. Install it on your server, and you gain access to a number of turnkey features &mdash; typically wrapped in an interface to make users, content, and settings easier to maintain. Layouts and frequently replicated elements (like nav bars) are easily repeatable, and simple site changes can often be made by fairly non-technical users. Additionally, many site designers and developers leverage the CMS to hand off a site to a client or content creator who wants to perform simple updates or handle routine maintenance &mdash; for better or worse.</p>
<p>In order to provide all these features, most content management systems leverage a database. That database stores content, user information, site configuration, and presentation data. Every time a visitor arrives on the page, the database is queried and content is retrieved/assembled for display. Every time.</p>
<p>Today, using these systems to power even the most basic sites has become common practice. Why? Because building simple sites on top of database-driven architecture feels more convenient than just delivering simple HTML content. As a result, our web has become bloated with lethargic, vulnerable content that costs us time and money.</p>
<h3>The case for simple&nbsp;websites</h3>
<p>It&rsquo;s ironic that while mobile devices have ushered in flat design and streamlined content, over-complicated dynamic architecture is powering some of the most basic content online.</p>
<p>Imagine your website as a newspaper. Publishing a site on a database-driven CMS like Wordpress is the equivalent of printing a newspaper on the fly, every time a reader wants to access any part of your paper. This inherently inefficient system results in slower page loads and lost eyeballs.</p>
<p>These same visitors have been bitten by wide spread security breaches that seem to crop up with increasing frequency. Needless complexity and poorly maintained software expose vulnerabilities that can lead to a site going offline, being inundated with malware, or worse &mdash; a data breach. By some measures &mdash; as many as&nbsp;<a href="https://www.smashingmagazine.com/2015/11/modern-static-website-generators-next-big-thing/" target="_blank" rel="noopener nofollow" rel="nofollow noopener" data-href="https://www.smashingmagazine.com/2015/11/modern-static-website-generators-next-big-thing/">70% of WordPress installs are vulnerable</a>&nbsp;to known exploits, such as last May when a&nbsp;<a href="http://www.engadget.com/2015/05/07/wordpress-xss-bug/" target="_blank" rel="noopener nofollow" rel="nofollow noopener" data-href="http://www.engadget.com/2015/05/07/wordpress-xss-bug/">bug affected millions of WordPress sites</a>. In the previous year as many as&nbsp;<a href="https://nakedsecurity.sophos.com/2014/10/30/millions-of-drupal-websites-at-risk-from-failure-to-patch/" target="_blank" rel="noopener nofollow" rel="nofollow noopener" data-href="https://nakedsecurity.sophos.com/2014/10/30/millions-of-drupal-websites-at-risk-from-failure-to-patch/">12 million Drupal site were compromised</a>. Each new complexity in the system and/or time-saving plugin becomes a potential point of failure.</p>
<p>Likewise, developers pay the price when handing off routine updates and regular maintenance to a client. I&rsquo;ve personally received the unfortunate after hours call from a client who discovered her site was compromised and infected with embarrassing content. It could have been avoided. But, since her site hadn&rsquo;t been changed/updated in ~18 months the software had fallen behind, making it susceptible to attack.</p>
<h3>Houndstooth is a better CMS for static content</h3>
<p>As with so many things, simple is ultimately better.</p>
<p>For many use cases (brochure sites, service providers, portfolios, event pages, landing pages), static sites are quite obviously the right tool for the job. In fact, any site where visitor interactions are guided (accessing existing content, submitting content through a fixed form, and not interacting with other visitors in real time) can be deployed as a static site. All of these interactions can be handled without a database.</p>
<p>But, no one wants to lose all the convenience features of a CMS. The good news is, there are better options to provide the same benefits with less hassle.</p>
<p>Today&rsquo;s browsers can execute many of the same functions that used to require dynamic code running on a server. Comments, social integration, data storage, live chat, payments, and search can be easily added to a static site.</p>
<p>Modern tools like <a href="https://houndstooth.work">Houndstooth</a> allow you to manage websites that are faster, leaner, and as flexible as a traditional database-driven CMS.</p>
<ul>
<li>Static sites managed with Houndstooth load faster (because we&rsquo;ve rendered the site in advance), and eliminate the risk of a database breach (because there is no database).</li>
<li>Site developers use tools they are comfortable with (git, local development, Jekyll).</li>
<li>Content is managed in a customized interface for non-technical users to update/create content.</li>
<li>Edits are made in the browser, and your site is rebuilt automatically on save using tools like <a href="https://razorsite.co">RazorSite</a> or Netlify.</li>
<li>Your site files are hosted on Github for safety and infinite redundancy.</li>
<li>Houndstooth is open source, and we are looking for contributors.</li>
</ul>
<h3>Static is a Beautiful Future</h3>
<p>Is static the right solution for your next site? For simple sites, landing pages, and many web apps, the answer is a resounding yes. The ecosystem of tools surrounding static sites is rich and growing. Combining these with a client-ready CMS like BowTie match the capabilities that have made dynamic websites convenient in the past.</p>
<p>An increasing number of agencies and freelancers are deploying static sites for small business clients and major brands. Static architecture was the solution that fixed&nbsp;<a href="https://developmentseed.org/blog/new-healthcare-gov-is-open-and-cms-free/" target="_blank" rel="noopener nofollow" rel="nofollow noopener" data-href="https://developmentseed.org/blog/new-healthcare-gov-is-open-and-cms-free/">Healthcare.gov</a>&nbsp;following it&rsquo;s very high profile performance failures at launch. And, an increasing number of design-driven enterprise companies are using static sites to power their primary properties (<a href="https://blog.mailchimp.com/building-the-new-mailchimp/" target="_blank" rel="noopener nofollow" rel="nofollow noopener" data-href="https://blog.mailchimp.com/building-the-new-mailchimp/">MailChimp</a>, Nest, Google).</p>
<h3>Working with Houndstooth</h3>
<p>If you wan to expolore <a href="https://houndstooth.work/">Houndstooth</a> for your next project I recommend you visit the main porject site, and check out the source on <a href="https://github.com/bowtie-co/houndstooth-ui" target="_blank" rel="noopener nofollow">Github</a>.</p>
<p>&nbsp;</p>
<p>If you would like to work with our agency on your next project, <a href="/contact/">contact Bowtie.co</a> to start the conversation.</p>
<p>&nbsp;</p>
<p><em>*This post was updated from an earlier post I wrote on Medium</em></p>
