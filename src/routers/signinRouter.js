
users.findOne({ where: { user: req.body.user, password: req.body.password } }).then((result) => {
    if (result && result.user) {
        req.session.user = result.user
        req.session.isLoggedIn = true;
        req.session.save()
        res.redirect('/home')
    } else {
        res.redirect('/#errorLogin')
    }
})