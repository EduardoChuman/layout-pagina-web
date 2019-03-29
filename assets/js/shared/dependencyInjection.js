function DependencyInjection() {

    function getSite() {
        return new Site();
    }
	
	return {
        getSite: getSite
    }

}