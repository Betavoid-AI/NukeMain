
//THHIS IS THE PAGE 1
/**
 * GET HOMEPAGE
 *
 */

exports.homepage = async (req, res) => {
    const locals={
        title: "nodejs notes", //we are pushing the title of the page into the main.ejs in line 7 from here,  will get injected into locals.title
        description: "free nodejs app" //pushing descrion o fthe page into main.ejs in line 8 from here, will get injected into locals.tdescripyion
    }

    res.render('index', {locals, layout: '../views/layouts/front-page'}); //we created a new layoout for this page, its name is front page and is located in that location
    
}


//THHIS IS THE PAGE 2
/** 
 * GET About
 *
 */

exports.About = async (req, res) => {
    const locals={
        title: "nodejs about", //we are pushing the title of the page into the main.ejs in line 7 from here,  will get injected into locals.title
        description: "free nodejs app" //pushing descrion o fthe page into main.ejs in line 8 from here, will get injected into locals.tdescripyion
    } //this just sets the meta data for the page

    res.render('about', locals); //THIS IS WHERE WE ACTUALLY LINK THE PAGE WE MAKE, RENDER('NAME OF THE PAGE.EJS', LOCALS FOR METADATA), HERE YOU WILLL PASS THE NAME OF THE PAGE YOU MADE.
    
}

//TO MAKE NEW PAGE, JUST COPY PASTE THE BLOCK ABOVE AND CHANGE THE RENDER('NAME OF THE PAGE') AND THE EXPORTS.NAME OF THE PAGE
//THEN GP TO INDEX.JS, MAKE COPY OF THE ROUTER.GET AND PASS URL NAME YOU WANT NEW PAGE TO HAVE AND THE NAME OF THE CLASS YOU MADE HERE WHICH IS ATTACHED TO EXPORTS
//THATSIT, THEN IN BROWSER, PUT LOCALHOST:5000/NAME OF THE URL YOU PASSED IN INDEX.JS
