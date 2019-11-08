let express = require('express')
let app = express()
let exphbs = require('express-handlebars')
let path = require('path')
var indexRouter = require('./routes/index');
var productsRouter = require('./routes/products');


app.set('views', path.join(__dirname, 'views'))
app.engine('.hbs', exphbs({
    defaultLayout: 'main',
    layoutsDir: path.join(app.get('views'), 'layouts'),
    partialsDir: path.join(app.get('views'), 'partials'),
    extname: '.hbs'
  })
)
app.set('view engine', '.hbs')
app.use(express.static(path.join(__dirname, 'public')))

app.use('/', indexRouter);
app.use('/products', productsRouter);

app.listen(3000)