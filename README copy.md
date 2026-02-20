# WEDE POE Report

## Improvements Made in the Part 1 document

### Improvements according to The feedback

* According to the feedback on the document Text assets were needed in the document and not just videos and images.
This was remedied by typing out the text that each webpage would have.

### Outside Improvements made on the Document

* In the "About Us" Page, a section called "Our Contributors" is meant to showcase the people involved in this organization, The addition of character profiles has been implemented. Images of 3 people were chosen along with text that gives information on each.

* Platform Links were added to the footer to make it look more interesting, This is mentioned in the Web Pages and content section of the document.

* For the Images originally selected in the webpage and content section for the gallery page, 8 images were removed to create a more organized and structured gallery layout. The images seen in the document are the ones that will be used for the gallery

## Improvements Made in the Part 1 Code

### Improvements according to The feedback

* Subheadings needed to be consistent throughout the website- An external CSS stylesheet was used to style all of the subheadings, headings, and paragraphs of the website simultaneously, making sure that they remain consistent throughout the website.

* The line under the navigation bar on the "About Us " page needed to be removed - This was fixed by removing the "hr" tag that was there.

* The home page and the Our Work page needed more content and a better layout - More content was added to these pages, Where introduction paragraphs were added to these screens detailing a brief explanation of what to see when looking at the page. On the Home Page A section called "Join Our Community" has content prompting the user to interact with the organization by following their accounts or subscribing to their newsletter.
  
* The Our Work Page a section called "Our Activities" was added with subheadings along with text that allows the user to read through what the gallery does. The information was spaced between each other so it wouldn't look like crowded information
  
* Subheadings in the Our Work Page needed to be changed - Changed the name of the subheadings and styled them appropriately.

* The Gallery Images and videos needed to be scaled to a larger size- The gallery Images and videos had been enlarged, where that image's width is scaled to 100% and the height being 350px
  , the videos were scaled to have a width of 350px and a height of 250px. This makes it so that the content appears larger and is more appealing to viewers.

* The Contact Us page needed a better layout- The layout of the contact page had been changed so that the contact information was placed next to the map, using a div that would be modified to space the content evenly, this ensures that the map and the contact information is made visible in a practical manner.

### Outside Improvements made to the code
* The About Us page had a section called "Our Contributors" that was added. The section would showcase all of the people responsible for the gallery's success.

* A link was added to the Home page, About Us page, and Our Work page that would navigate the user towards the Contact Us page. This addition was made for users to have the option of quickly navigating to the Contact Us page should they wish to contact the user without having to look at all of the other information available, With the Form placed at the bottom of the page to finish the layout.

## The Use of CSS
This section will showcase the Custom CSS and the Bootstrap classes that were used across the web pages, along with specific attributes that contribute to the website's design.

### The Bootstrap Classes Used
Bootstrap was used to help improve the visual appeal of the website and help make the contents within each page more responsive. These were the following cases that we used across the web pages:

* navbar-expand-md: Makes it so that the navbar expands when the screen is bigger than 768px (contributors, n.d.).
*  row
  * Purpose: Creates a horizontal group of columns (Contributors, n.d.).
  * Attributes:
    * display: flex: Aligns elements in a flex container that enables proper spacing.
* col-
  * Purpose: Defines column sizes for responsive layouts (contributors, n.d.).
* btn
  * Purpose: Styles elements( links, buttons) into a clickable button (contributors, n.d.).
  * Attributes:
    *Padding: Provides spacing inside the button for a better user experience.
    *border-radius: Rounds the corners of the button for a softer appearance 
* text-center
    * Purpose: Centers the text within an element.
    * Attributes:
      *text-align: sets the horizontal alignment of the text to the center.
      
### Custom CSS Classes

Custom CSS was used to help with specific design requirements within the website. These are the classes and elements that were used in the stylesheet:

1. Typography
  * Element: h1,h2,h3
    * Attributes:
      * Font Family: Merriweather, sans-serif (Google Fonts, n.d.).
      * Purpose: Sets a consistent font style for headings across the website, providing a           somewhat classic and readable view.
      
  * Element: p
    * Font Family: Roboto, sans-serif (Google Fonts, n.d.).
    * Purpose: To display a modern and clean font for the paragraph text, making the sight         look more professional.
      
  * Class: tab-links:
    * Font-Family: Monserrat, sans-serif (Google Fonts, n.d.).
    * Purpose: Styles the tab with a font that fits a more contemporary theme. Giving it a         clean look.

2. Navigation Bar
  * Class: Navbar
    * Background Color: Black
    * Padding:25px
    * Purpose: Defines the navigation area with a solid background and padding for spacing.
      
  * Class: logo-image
    * Height: 70px
    * Width: 70px
    * Border Radius: 50%
    * Object-Fit: Cover
    * Purpose: Create a circular logo so it can fit well within the website (www.w3schools.com, n.d.).

  * Class: navbar-nav
    * Display: Flex
    * Width: 100%
    * Justify Content: Space-between
    * Purpose: To Arrange the navigation links horizontally with event space, creating an optimal layout for different screen sizes

3. Links and Hover Effects
  * Class: tab-item
    * List Style Type: None
    * Purpose: Removes the bullet points from the list items, giving a cleaner appearance to navigation elements (W3schools.com, 2024).
      
  * Class: navbar-nav a
    * Text-decoration: None
    * Purpose: Removes underlining from links.
      
  * Class: navbar-nav a: hover
    * Background-color: Aqua
    * Color: black
    * Border Radius: 5px
    * Purpose: Adds A hover effect to the link, improving the user interaction by changing the color and shape.
      
4. Sections
   
  * Class: section-light
    * Background Color: Azure
    * Padding: 5rem
    * Text-align: Center
    * Purpose: Styles a specific section with a light background and centered text, to emphasize more visibility.

  * Class: section-dark
    * Background Color: black
    * Padding: 5rem
    * Text-align: Center
    * Purpose: Provides contrast against lighter sections, making it look more visually appealing.

5. Layout
  * Class: row
    * Display: flex
    * Justify-content: Space-between
    * Padding: 20px
    * Gap: 20px
    * Purpose: Make sure that the layout is flexible and evenly spaced.
      
  * Class: col
    * Flex: 1
    * Min-width: 300px
    * Purpose: Allows for a responsive column layout, so it can adjust to fill any available space while maintaining a minimum width.
      
6. Images
  * Class: map
    * Border Radius: 8px
    * Width: 100%
    * Height: 300px
    * Purpose: Make sure that the map image fits with its container while providing a smooth appearance with its rounded corners.
      
  * Class: art-grid
    * Grid Template Columns: Repeat(auto-fit, minmax(250px, 1fr))(www.w3schools.com, n.d.)
    * Justify-content: center
    * Purpose: Creates a grid layout for the artworks that adapt to the changes in screen sizes.
      
  * Class: art-grid img
    * Max-Width: 100%
    * Max-Height: 300px
    * Height:Auto
    * Object-fit: cover
    * Purpose: This makes sure that the images are responsive and can keep their size unchanged when changing the screen size which helps improve visual quality.
      
7. Character cards and Artworks
  * Class: Card
    * Background-color: White
    * Purpose: This styles the card components with a clean background for better visibility.

  * Class: card-body
    * Text-align: center
    * Purpose: Centers the text within card components, improving the section's overall readability
   
  * Class: most-Viewed-Pieces
    * Display: Flex
    * Flex-direction: row
    * Justify-Content: Space-evenly
    * Purpose: To arrange the artworks in a flexible row layout, making them more organized.
      
8. Footer
  * Class: footer-links
    * Float: right
    * Purpose: Positions the footer links to the right side, achieving a balanced footer layout (www.w3schools.com, n.d.).
      
  * Class: footer-links img
    * Height: 50px
    * Width: 50px
    * Border Radius: 50%
    * Object-fit: Cover
    * Purpose: This allows the social media icons to be displayed as circular images, which helps create a more structured look in the footer.
      
## The Use of Responsive Web Design

When adding responsive web design to the website, the decision to use media queries was made and as such the changes that were made to ensure that the website is still visually appealing on screens lower than 768px are listed below. 

### The Changes Made:

1. Navbar and Logo: The padding and logo sizes were reduced to fit a smaller screen, this helped when wanting to change the layout to stack elements vertically.

2. Navigation Links: Made the links stack vertically using (display: block) and adjusted the link's padding to make the content more readable.

3. Sections and Content: Reductions in the sections' padding were done as well as centering the content wherever needed.

4. Grid Layouts: Adjusted the art grid layout to a single column so it could fit better on small screens

5. Images/Videos: Visual elements were reduced in size so they don't overflow and cause horizontal scrolling.

6. Spacing: Margins were added with adjusted padding to ensure no overlap with any content on the screen.
## Improvements Made in the Part 2 Code

### Improvements according to The feedback
The feedback given to me indicated that my website lacked consistency through the web pages, not only that but the navigation bar needed more improvement it needed to be dark as well to match the footer, The images were too close to the text content in the top parts of each webpage, and most of the elements in my website needed hover effects, videos had to be larger the logo had to be bigger and centered on both the mobile and desktop version of the website as well as inconsistent font sizes. 

All of these errors were fixed after taking note of them, of which include:
* The improved Navbar:
  * The Navbar and the footer needed to match color schemes. The background color is set to black in line 57 of the CSS file. This does the job of matching the footer's color scheme.
* The improved introduction content:
  * Every page has an introductory piece of content that gives an overview of the page they are looking at. What needed improvement was the space between the image/video and the text. This was sorted as seen in line 69 of the homepage HTML file. The content is wrapped in the "introduction" div, which is then set to space the content evenly from line 114 to 118 in the CSS file. This ensures the content has enough space to not look crowded.
* Addition Of Hover Effects:
  * The feedback given to me suggested i make the contact page email link give off a hover effect. This was done in the CSS file as lines 317 to 322 demonstrate this, As for the social media links, I could only make them give a hover effect in the footer, not on the Contact Us page itself, so while the feature doesn't work completely the hover feature still works on the the footer of all the webpages.
* Videos and images:
  * were made larger on each of the web pages to make them more visible to the user. Examples of this can be seen in the CSS file from lines 177 to 181.
* Increased Logo Size:
  * The size of the logo was too small and had to be enlarged, in lines 71 to 80 of the CSS file, the logo is enlarged to make it easier for users to see.
* Centered headings:
  * The placement of the headings of all the web pages was incoherent with the overall design of the website, so to fix this I had to give each of the page titles a "heading class" as seen in the HTML home page, line 67 and then have that class be affected by the following attributes in the CSS file, being in line 149 to 153 (This process was repeated with all other web pages on the website).
* Font sizes:
  * Font sizes need to be consistent, this was sorted by setting all of the different types of headings used in the websites to different font sizes, this process is seen in the CSS file from lines 36 to 54.
* The Contact Form:
  * The layout of the contact form wasn't as appealing as originally intended, so I re-structured it, from lines 164 to 186, the input form and the text area width its submit and clear buttons were separated by divs that were the spaces evenly. and with the checkboxes placed horizontally above the two divs, this made the form more structured and neater.

## Additions Made to Part 3
With regards to part three Apart from the improvements to part 2 previously mentioned, Part three focused more on styling and functionality,
which is why the additions made in part 3 include:
* SEO Practices
* A Functional Gallery
* Email Validation
* Google forms
* A Footer Detailing Last-Modified Dates
* Aesthetic cursor
* Hamburger menu

The Details on how all of these features were added will be categorized under each of the following headings:
Functionality, SEOS, and Forms.

## Functionality

### Email Validation
One requirement of the website was the use of an email validation functionality, ensuring that users are unable to input incorrect data.
This was the code used as demonstrated by the IIE(2024):

![Screenshot 2024-11-07 152929](https://github.com/user-attachments/assets/21e68dd2-3c04-4118-8ea8-f161edd3f513)

This code ensures that when the user presses the submit button, the program will check to see if the input matches the proper email syntax, if the input does not follow the proper syntax an alert will be sent out telling them to enter a valid email.
The image below showcases the alert sent when an invalid email is input:

![Screenshot 2024-11-07 153753](https://github.com/user-attachments/assets/d05cd900-4d14-4591-935a-1174d4dbdf70)

### Modified-Date Footer
Another requirement for the website is the use of a footer that updates the last day a web page was modified and displays that date on the footer.
This was the code used, that was demonstrated by the IIE (2024) :

![Screenshot 2024-11-07 154857](https://github.com/user-attachments/assets/be0e1063-b011-4ded-b171-6493ff0da014)

This code is set up so that the day a web page is modified, it is saved and displayed on the footer when the website loads.

### The Hamburger Menu
Using Bootstrap I was able to create a toggle button that would hide the navigation bar when the screen would enter its mobile view (contributors, n.d.). This would make for better aesthetics as well, as the page would look less crowded. This process is seen in lines 24 to 28 in the homepage and is replicated throughout the website.

### The Aesthetic Cursor
This functionality was a personal preference of mine, I thought having a custom cursor for the website would be more appropriate to the theme of an art gallery, This is the code used to create this:

![Screenshot 2024-11-07 160654](https://github.com/user-attachments/assets/78f93bba-4e11-468a-abe0-79c72c1ea148)

![Screenshot 2024-11-07 160643](https://github.com/user-attachments/assets/3270692a-3e03-426d-b72e-0b4f0e03b05b)

![Screenshot 2024-11-07 155550](https://github.com/user-attachments/assets/5d9394c2-9dc0-4023-97b6-d9308a2ffc3f)

This code  above essentially replaces the website's default cursor and replaces it with the custom cursor. The javascript code works to track the position of the cursor pointer, making sure it matches the movement of the mouse depending on the mouse event that occurs. The if statement used is made to execute the color of the cursor and its trail based on which section it passes through "light" and "dark. These were data attributes (data-theme) as demonstrated by developer.mozilla (2024), set up in the HTML webpages which would then be pulled into the javascript function (Potts, 2024). Finally, the setTimeout method is used to set the amount of time the cursor can stay idle before disappearing. In this case after 0.5 sections of the cursor being idle (W3Schools, 2019).

Below is the code used for the cursor in the CSS File:

![Screenshot 2024-11-07 155734](https://github.com/user-attachments/assets/35547b36-6285-4d59-9f2a-6d57018fc090)

This is the result:
https://github.com/user-attachments/assets/d541d511-b65a-452c-8c0a-a9b37385ad4e
### A Functional Gallery
The last part of the website's functional requirements was the implementation of a functional gallery so that if a user clicks on a gallery image, a lightbox will open with the selected image expanding and providing information of the gallery picture, with button prompts to move to the next or previous gallery image.
This was done by using a data attribute called Lightbox and wrapping all of the gallery images inside an "<a>" tag with the lightbox inside. 
This is what the code looked like for one of the images.

![Screenshot 2024-11-07 163134](https://github.com/user-attachments/assets/08f27102-73a0-4056-81cc-e4df57241f38)

A CSS file for the lightbox had to be created to style the lightboxes as well as the 3 jQuery library files that needed to be sourced from the gallery page, according to The IIE (2024).

This was the result:

![Screenshot 2024-11-07 163445](https://github.com/user-attachments/assets/7063bbb6-1220-4cc9-b947-0122e50f25af)
## SEO
### SEO tags
According to the IIE(2024), SEO tags are pieces of code that help search engines understand the content of a webpage and rank it against others. Search engines generally look at meta tags(tags that provide search engines descriptions of the content a user searches up, They include possible combinations of keywords that a user might search up, Another piece of code that search engines look at is image names and their alt attributes as names of the images are read by the search engine as well and lastly heading tags as are also picked up by search engines, these are responsible for indicating the most important sections of a website's webpage. This makes it easier for search engines to prioritize which information should be understood first.
### Implementation of the SEO tags
When implementing the SEO tags into my project I did the following:
* Added meta tags:
  * Each web page has a meta tag with a description of the webpage itself, giving search engines an overview they can understand when the user searches for the website, any keywords that the website has that the engine can recognize will be ranked.
  This is an example from one of the pages:
     ![Screenshot 2024-11-07 182102](https://github.com/user-attachments/assets/986e4f5c-4c12-47fc-a233-b0753209c3d0)
* Renamed Images and Flushed Out Alt Attributes:
  * All images were renamed so they would be easier for search engines to recognize, their alt attributes were also given names giving brief descriptions of the image content.
  Here is what that looks like below:
  
  ![Screenshot 2024-11-07 182616](https://github.com/user-attachments/assets/89495934-5d07-40af-8e98-afd8c09e7727)

* Made use of appropriate heading tags:
  * I used appropriate heading tags (h1, h2, and h3) throughout my website prioritizing which content should be looked at first.
  Here is an example from one of the web pages below:
  
  ![Screenshot 2024-11-07 183327](https://github.com/user-attachments/assets/f36ef4b0-b2f8-4b6e-ba77-4b5096fb5f6c)
  
This was all i did to implement SEO tags in my project.
## Forms
### Addition of Google Forms

![Screenshot 2024-10-15 134650](https://github.com/user-attachments/assets/aeb59413-abe7-4b90-b98d-f5625e0a3c62)

![Screenshot 2024-10-15 134716](https://github.com/user-attachments/assets/958749ba-fabc-4b59-a7eb-680c73fc91ac)

![Screenshot 2024-10-15 134755](https://github.com/user-attachments/assets/9a72dd11-3ec0-4733-b16f-de07119030ed)
## Reference List

www.w3schools.com. (n.d.). CSS grid-template-columns property. [online] Available at: https://www.w3schools.com/cssref/pr_grid-template-columns.php [Accessed 26 Sep. 2024].

Contributors, M.O., Jacob Thornton, and Bootstrap (n.d.). row columns. [online] getbootstrap.com. Available at: https://getbootstrap.com/docs/5.3/layout/grid/#row-columns [Accessed 26 Sep. 2024].

contributors, M.O., Jacob Thornton, and Bootstrap (n.d.). Buttons. [online] getbootstrap.com. Available at: https://getbootstrap.com/docs/5.3/components/buttons/#button-tags [Accessed 26 Sep. 2024].

contributors, M.O., Jacob Thornton, and Bootstrap (n.d.). Columns. [online] getbootstrap.com. Available at: https://getbootstrap.com/docs/5.3/layout/columns/ [Accessed 26 Sep. 2024].

contributors, M.O., Jacob Thornton, and Bootstrap (n.d.). Navbar. [online] getbootstrap.com. Available at: https://getbootstrap.com/docs/5.3/components/navbar/#nav [Accessed 26 Sep. 2024].
Google Fonts. (n.d.). Google Fonts. [online] Available at: https://fonts.google.com/specimen/Roboto?query=roboto 
[Accessed 26 Sep. 2024].

Google Fonts. (n.d.). Merriweather. [online] Available at: https://fonts.google.com/specimen/Merriweather?query=merriweather 
[Accessed 26 Sep. 2024].

Google Fonts. (n.d.). Google Fonts. [online] Available at: https://fonts.google.com/specimen/Roboto?query=roboto 
[Accessed 26 Sep. 2024].

W3schools.com. (2024). W3Schools.com. [online] Available at: https://www.w3schools.com/cssref/pr_list-style-type.php 
[Accessed 26 Sep. 2024].

www.w3schools.com. (n.d.). CSS display property. [online] Available at: https://www.w3schools.com/cssref/pr_class_display.php [Accessed 26 Sep. 2024].

Potts, T. 2024. EASY CUSTOM CURSORS in HTML, CSS & JavaScript. [online] YouTube. Available at: https://youtu.be/OKvvjXu7WE8?si=h_HMqo1QenVP4Z2t [Accessed 5 Nov. 2024].

W3Schools. 2019. Window setTimeout() Method. [online] W3schools.com. Available at: https://www.w3schools.com/jsref/met_win_settimeout.asp[Accessed 5 Nov. 2024].

developer.mozilla.2024. Using data attributes - Learn web development | MDN. [online] Available at: https://developer.mozilla.org/en-US/docs/Learn/HTML/Howto/Use_data_attributes [Accessed 5 Nov. 2024].



