const  {spawn} = require('child_process')


const pyFunc = async (req,res) => {
    try {
        const py = spawn(process.env.PYVER,['./public/script.py','Alan'])
        let msg='Error'
        py.stdout.on('data',(data)=>{
            console.log(data.toString())
            msg = data.toString().replace(/(\r\n|\n|\r)/gm, "");
        })
        py.on('close',(code)=>{
            console.log('process exited with code: ',code)
            if(code===0)
                return res.status(200).json({success:true,msg})
            return res.status(code).json({success:false,msg})
        })
    } catch (error) {
        console.log(error)
        return res.status(500).json({success:false,msg:`${error}`})
    }
}

module.exports = {
    pyFunc
}