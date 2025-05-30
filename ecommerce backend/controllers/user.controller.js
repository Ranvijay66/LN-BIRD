

const UserModel=require('../models/user.model');



const registerUser=async (req,res) => {
    try {
        const {name,email,password}=req.body;
        if(!name || !email || !password){
            return res.status(400).send({message:"All Fields are mandatory"})
        }
        const newUser=new UserModel({name,email,password});
        const resp=await newUser.save();
        return res.status(201).send({ message: 'Registered successfully', user: resp });
        
    } catch (error) {
        console.log(error);
        return res.status(500).send({error:"Error Occured"})
    }
    
}


const loginUser= async (req, res) => {
  try {
    const { email, password } = req.body;

    if (!email || !password) {
      return res.status(400).send({ message: 'Email and Password are mandatory' });
    }

    const user = await UserModel.findOne({ email });

    if (!user) {
      return res.status(404).send({ message: 'User not found' });
    }

    if (user.password !== password) {
      return res.status(401).send({ message: 'Invalid credentials' });
    }

    return res.status(200).send({ message: 'Login successful', user });

  } catch (error) {
    console.log(error);
    return res.status(500).send({ error: 'Error occurred' });
  }
} 

module.exports={registerUser,loginUser}