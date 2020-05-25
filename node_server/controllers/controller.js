// The controller web page 'controls' all of the actionable parts 
// of a web page (buttons, etc)




exports.hello_world = function (req, res) {
  res.send('Hello world')
}



// =========================================================
// INDEX PAGE
// =========================================================

// Display Genre update form on GET.
exports.index_get = function (req, res) {
  res.send('NOT IMPLEMENTED: Main Page');
};

// Handle Genre update on POST.
exports.index_post = function (req, res) {
  res.send('NOT IMPLEMENTED: Genre update POST');
};

// =========================================================
// ABOUT PAGE
// =========================================================

exports.about_get = function (req, res) {
  res.render('about', {
    title: 'About',
    about: 'This is to demonstraight the connection betweeen controller -> routes -> app -> html file',
    name: 'George'
  });
};

// =========================================================
// SERVING JSON 
// =========================================================

exports.about_get = function (req, res) {
  res.render('about', {
    title: 'About',
    about: 'This is to demonstraight the connection betweeen controller -> routes -> app -> html file',
    name: 'George'
  });
};



// =========================================================
// SERVING STATIC FILES (html / images etc)
// =========================================================

exports.image_get = function (req, res) {
  res.render('static-file', {
    title: 'Example of a static file / image',
  });
};


// =========================================================
// SENDING FILES
// =========================================================

exports.file_download = function (req, res) {
  res.download('./public/hello-world.txt', 'helloWorld.txt', (err) => {
    //res.download(<file>, <file name for client> , (errors))
    if (err) {
      res.send(err)
      console.log(__dirname)
      console.log(err)
      return
    } else {
      console.log('file downloaded')
      //res.redirect('/') // redirect the user back to the index page
    }
  });

};

// /home/george/Documents/Programming/Projects/Node/Node-Experimentation/node_server/public/hello-world.txt









// =========================================================
// BASIC FORM PAGE
// =========================================================

// Form page GET
exports.form_get = function (req, res) {
  res.render('form', {
    title: 'Form Example',
    data: {},
    errors: {}
  });
};

// Form Page POST
exports.form_post = function (req, res) {
  res.render('form', {
    title: 'Form Example',
    data: req.body.message // take data from form message
  })
  console.log(req.body.name) // print data back to server console log
};


// =========================================================
// FORM PAGE WITH SANITIZATION (FORM 2)
// =========================================================



// Form page GET
exports.form_sanitization_get = function (req, res) {
  res.render('messageForm', {
    title: 'Form Sanitisation Example'
  });
};

const {
  check,
  validator
} = require('express-validator')

// Form page POST
exports.form_sanitization_post = [
  check('name', 'needs to be more than three characters').isLength({
    min: 3
  }),
  check('messageTitle', 'needs to be more than three characters').isLength({
    min: 3
  }),
  check('message', 'needs to be more than three characters').isLength({
    min: 3
  })
  ], 

  (req, res, next) => {

    // Extract the validation errors from a request.
    const errors = validator.validationResult(req);
    console.log(errors)


    if (!errors.isEmpty()) {
      return res.status(422).json({ errors: errors.array() })
      // res.render('messageForm', {
      //   title: 'Form Sanitisation Example',
      //   errors: errors.array()

      // })
      // return;
    } 
    else {
      // res.render('messageForm', {
      //   title: 'Form Sanitisation Example',
      //   name: req.body.name,
      //   messageTitle: req.body.messageTitle,
      //   message: req.body.messageTitle
      // })
      res.send({})
      return;
    }
  }




exports.form_sanitization_post = function (req, res) {
  res.render('messageForm', {
    title: 'message sanitisation ',
    name: req.body.name,
    messageTitle: req.body.messageTitle,
    message: req.body.message
     // take data from form message
  })
  console.log(req.body.name) // print data back to server console log
};





// =========================================================
// FORM PAGE MODIFYING INPUT
// =========================================================




// =========================================================
// FORM PAGE SAVING TO DATABASE
// =========================================================

exports.form_db_get = function (req, res) {
  res.send('Not currently implemented   <a href = "/">Home</a>')
}
exports.form_db_post = function (req, res) {
  res.send('Not currently implemented   <a href = "/">Home</a>')
}




// =========================================================
// UPLOADING IMAGE 
// =========================================================

// =========================================================
// SAVING IMAGE TO DATABASE
// =========================================================

// =========================================================
// SAVING FILE
// =========================================================

// =========================================================
// MODIFYING FILE
// =========================================================

// =========================================================
// SAVING FILE TO DATABASE
// =========================================================

// =========================================================
// SAVING CSV TO DATABASE
// =========================================================

// =========================================================
// EDITING CSV FILE
// =========================================================