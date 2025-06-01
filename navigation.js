/**
 * navigation.js
 *
 * Handles toggling the navigation menu for small screens.
 */
( function() {

	var containers = document.getElementsByClassName( 'button-menu' );
	var i;
	for (i = 0; i < containers.length; i++) {
		set_button_style( containers[i].id );
	}
} )();

function set_button_style(id) {

	var container = document.getElementById( id );

	if ( undefined == container )
		return;

	var button    = container.getElementsByTagName( 'h1' )[0],
	    menu      = container.getElementsByTagName( 'ul' )[0];

	if ( undefined == button )
		return;

	if( undefined == menu ) {
		button.style.display = 'none';
	} else {
		button.onclick = function() {
			if ( -1 != button.className.indexOf( 'toggled-on' ) ) {
				button.className = button.className.replace( ' toggled-on', '' );
				menu.className = menu.className.replace( ' toggled-on', '' );
			} else {
				button.className += ' toggled-on';
				menu.className += ' toggled-on';
			}
		};

		// Hide menu toggle button if menu is empty.
		if ( ! menu.childNodes.length )
			button.style.display = 'none';
	}
}