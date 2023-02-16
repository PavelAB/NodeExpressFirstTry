const homeController={

    getHome : (req,res)=>{
        console.log(`We are here ${req.url}`);
        const data = {title: 'Accueil'};
        res.render('home/home', data );
        // res.status(200).send('<h1>Home<h1>');

    }
}
module.exports=homeController;