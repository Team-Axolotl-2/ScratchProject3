// setting up express Server
const app = express();

const cors = require('cors');

// Connect to the MongoDB Database
app.use(cors());


// Connect to the MongoDB Database






// Initialize universal middleware
app.use(express.json({ extended: false}))



// to avoid cors error, give permission ot front end
app.use(
  corse({
    origin: '',
    methods:'',
    credentials: true,
  })
);




// Define Routes





// Setting up the port
const PORT = 3000;
app.listen(PORT, () => console.log(`Server started on port ${PORT}`))




