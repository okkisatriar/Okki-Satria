const mysql = require ('mysql');
const bodyparser = require ('body-parser');
const koneksi = require('cors');
const express = require('express');

const app = express();
const dbs = mysql.createConnection(
    {
        host: 'localhost',
        user: 'root',
        password: '',
        database: 'rumahouse',
        port: '3306'
    }
);

dbs.connect();

var port = 8002;

app.use(koneksi());
app.use(bodyparser.json());
app.use(bodyparser.urlencoded({extended: false}));

// Fungsi Tampilkan List Produk
app.get('/Product', (req, res) =>
{
    var panggilData = `SELECT * FROM table_addproduk`;
    dbs.query(panggilData, (err, result) =>
    {
        if (err)
        {
            throw err;
        }
        else
        {
            res.send(result);
        }
    });
});

// Fungsi Tambah data Produk
app.post('/Producttambah', (req, res) =>
{
    // var fileNama = req.files.file.name;
    var judulIklan = req.body.juduliklan;
    var namaUser = req.body.namauser;
    var deskripsi = req.body.deskripsi;    
    var posted = (new Date ((new Date((new Date(new Date())).toISOString() )).getTime() - ((new Date()).getTimezoneOffset()*60000))).toISOString().slice(0, 19).replace('T', ' ');
        
    console.log(judulIklan);
    console.log(namaUser);
    console.log(deskripsi);

    // if(req.files)
    // {
    //     var fungsifile = req.files.file;
    //     fungsifile.mv("./tampungfile/"+fileNama, (error) =>
    //     {
    //         if(err)
    //         {
    //             console.log(err);
    //             res.send("Upload Fail")
    //         }
    //         else
    //         {
    //             res.send("upload Success")
    //         }
    //     });
    // }

    var tambahdata = `INSERT INTO table_addproduk SET id="${''}", posting="${judulIklan}", nama="${namaUser}", deskripsi="${deskripsi}", foto_produk="${''}", tanggaldibuat="${posted}"`;
    dbs.query(tambahdata, (err, result) =>
    {
        if (err)
        {
            throw err;
        }
        else
        {
            res.send('Update database sukses')
        }
    });
});

//Product//
// Fungsi Edit data Produk
app.get('/Productedit/:id', (req, res) =>
{
    var lempardata = `SELECT * FROM table_addproduk WHERE id = ${req.params.id}`;
    dbs.query(lempardata, (err, result) =>
    {
        if (err)
        {
            throw err;
        }
        else 
        {
            res.send(result);
        }
    });
});

// Fungsi Delete Data Produk
app.post('/Producthapus', (req, res) =>
{
    var idprod=req.body.idprod;
    console.log(req.body.id);
    var hapusdata = `DELETE FROM table_addproduk WHERE id = ${idprod}`;
    dbs.query(hapusdata, (err,result) =>
    {
        if (err)
        {
            throw err;
        }
        else
        {
            res.send('Data Terhapus')
        }
    })
})

// Category//
// Fungsi Tambah Category
app.post('/Categorytambah', (req, res) =>
{
    var namacategory = req.body.namacategory;
    // console.log(namacategory)
    var tambahdatacate = `INSERT INTO master_category SET nama_category="${namacategory}"`;
    dbs.query(tambahdatacate, (err, result) =>
    {
        if (err)
        {
            throw err;
        }
        else
        {
            res.send('Update database sukses')
        }
    });
});

// Fungsi Tampilkan Category
app.get('/Categorylist', (req, res) =>
{
    var panggilcategory = `SELECT * FROM master_category`;
    dbs.query(panggilcategory, (err, result) =>
    {
        if (err)
        {
            throw err
        }
        else
        {
            res.send(result)
        }
    });
});

//Fungsi Edit Category 
app.get('/Categoryedit/:id', (req, res) =>
{
    var id = req.params.id;
    var lemparcate = `SELECT * FROM master_category WHERE id = ${id}`;
    dbs.query(lemparcate, (err, result) =>
    {
        if (err)
        {
            throw err;
        }
        else 
        {
            res.send(result);
        }
    });
});

// Fungsi Hapus Category
app.post('/Categoryhapus', (req, res) =>
{
    var idcate = req.body.idcate;
    console.log(idcate)
    var hapuscate = `DELETE FROM master_category WHERE id = ${idcate}`;
    console.log(idcate)
    dbs.query(hapuscate, (err, result) =>
    {
        if (err)
        {
            throw err
        }
        else
        {
            res.send('Data Terhapus')
        }
    });
});

// Fungsi Login
app.post('/login', (req, res) =>
{
    var inputEmail = req.body.email;
    var idtampil = req.body.id_user;
    var passwordUser = req.body.password;
    var passwordEncrypt = crypto.createHash('sha256' , secret).update(passwordUser).digest('hex');
    
    var getData = 'SELECT * FROM table_user';
    dbs.query(getData, (err,result) =>
    {
        if (err)
        {
            throw err;
        }
        else
        {        
            for(i=0 ; i<result.length ; i++)
            {
                if ((inputEmail == result[i].email) && (passwordEncrypt == result[i].password))
                {
                 console.log('Login Sukses')
                 var status = '1';
                 res.send(status);
                 break;
                }
                else if (i === result.length-1)
                {
                 console.log('Login Gagal')
                 var status = '-1';
                 res.send(status);
                 break;
                }
            }
        }
    });
});

app.listen(port, () => {
    console.log('Server berjalan di port '+port+' ....')
});
