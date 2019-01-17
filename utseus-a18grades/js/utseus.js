function dostuff(theForm){
	var shuid = theForm.shuid.value.toUpperCase();
	var passport = theForm.passport.value.toUpperCase();
	var thepass = shuid + passport;
	var thepage = md5(thepass) + ".html";
	window.location.replace(thepage);
	return false;
}