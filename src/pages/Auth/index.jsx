/** @format */

import React, { useState } from "react";
import * as Components from "../../components/Components";

const Auth = () => {
	const [signIn, toggle] = useState(true);
	return (
		<Components.Container>
			<Components.SignUpContainer signinIn={signIn}>
				<Components.Form action="/home">
					<Components.Title>Creation de Compte</Components.Title>
					<Components.Input type="name" placeholder="Name" />
					<Components.Input type="email" placeholder="Email" />
					<Components.Input type="password" placeholder="Password" />
					<Components.Button>Inscription</Components.Button>
				</Components.Form>
			</Components.SignUpContainer>

			<Components.SignInContainer signinIn={signIn}>
				<Components.Form>
					<Components.Title>S'identifier</Components.Title>
					<Components.Input type="email" placeholder="Email" />
					<Components.Input type="password" placeholder="Password" />
					<Components.Anchor href="#">Mot de passe oublier</Components.Anchor>

					<Components.Button>S'identifier</Components.Button>
				</Components.Form>
			</Components.SignInContainer>

			<Components.OverlayContainer signinIn={signIn}>
				<Components.Overlay signinIn={signIn}>
					<Components.LeftOverlayPanel signinIn={signIn}>
						<Components.Title>Content de vous revoir</Components.Title>
						<Components.Paragraph>
							Pour rester en contact avec nous, veuillez vous connecter avec vos
							informations personnelles
						</Components.Paragraph>

						<Components.GhostButton onClick={() => toggle(true)}>
							S'identifier
						</Components.GhostButton>
					</Components.LeftOverlayPanel>

					<Components.RightOverlayPanel signinIn={signIn}>
						<Components.Title>Salut l'ami!</Components.Title>
						<Components.Paragraph>
							Entrez vos données personnelles et commencez votre voyage avec
							nous
						</Components.Paragraph>

						<Components.GhostButton onClick={() => toggle(false)}>
							S'inscrirer
						</Components.GhostButton>
					</Components.RightOverlayPanel>
				</Components.Overlay>
			</Components.OverlayContainer>
		</Components.Container>
	);
};

export default Auth;
