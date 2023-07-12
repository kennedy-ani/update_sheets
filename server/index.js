import express, { json } from 'express';
import googleapis, { google } from 'googleapis';
import cors from 'cors';
import credentials from "./credentials/trkf-385922-ac9d63310aaa.json" assert{type : 'json'};
const app = express();

app.use(function(req, res, next){
    res.header('Access-Control-Allow-Origin', 'https://update-sheets.vercel.app/')
    res.header('Access-Control-Allow-Methods', 'GET, POST, PUT, DELETE')
    res.header('Access-Control-Allow-Headers', 'Content-Type')
    next()
}); //allows access for all routes in your app
app.use(express.json());
// app.use(cors(app))


const scope = ['https://www.googleapis.com/auth/spreadsheets'];//spreadsheet scope 
const accessCredentials_email = credentials.client_email
const accessCredentials_pk = credentials.private_key


const authSheets = async() => {
    
    const auth = new google.auth.JWT(
        process.env.accessCredentials_email,
        null,
        process.env.accessCredentials_pk,
        scope
    );
    
    auth.authorize((err, token)=>{
        if(err){
            console.log(err);
            return;
        }
        console.log(`Access Token: ${token.access_token}`)
    })

    
    const sheets = google.sheets({version: 'v4', auth});
    return sheets;
}


app.put("/", async (req, res)=>{
    const sheets = await authSheets();
    
    const {sheetId, sheetRange, sheetValue} = req.body; //requests for the frontend


    sheets.spreadsheets.values.update({
        spreadsheetId: sheetId,
        range: sheetRange,
        valueInputOption: 'RAW', 
        resource: {
            values : [[sheetValue]]
        }
    }, (err, response)=>{
        if(err){
            console.log(`The API returned an error : `, err);
            return response.status(500).json({success:false, error: 'Failed to update google sheets'});
        }

        console.log('Sheet updated successfully');
        // return response.json({success: true})
    });

    
    res.json({success: true})
})


const PORT = 5000;
app.listen(PORT, ()=>console.log(`Server Running on http://localhost:${PORT}`));


