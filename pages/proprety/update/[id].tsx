import axios from "axios";
import Head from "next/head";
import { useRouter } from "next/router";
import React, { useEffect } from "react";
import Header from "../../../components/general/header";
import { propretyStore } from "../../../store/proprety";
import Footer from "../../../components/general/footer";
import PropretyNavbar from "../../../components/components/PropretyNavbar";
import {
	PropretyGalleryUpdate,
	ExternalDescription,
	InternalDescription,
	TenantCharge,
	UpdateRentalInformation,
	PropretyBanner,
} from "../../../components/components/updatePropretyComponents";

export default function Publication() {
	const proprety = propretyStore();
	const setProprety = proprety.setProprety
	const router = useRouter();
	const [propretyId, setPropretyId] = React.useState<string>("");

	useEffect(() => {
		if (router.query.id && typeof router.query.id === "string")
			setPropretyId(router.query.id);
	}, [router.query.id]);

	useEffect(() => {
		axios.get(process.env.NEXT_PUBLIC_DB_URL + "/proprety/" + propretyId)
			.then((res) => {
				if (!res.data[0]) setProprety(res.data);
			})
			.catch((err) => console.log(err));
	}, [propretyId, setProprety]);

	return (
		<>
			<Head>
				<title>Zubu</title>
				<meta
					name="description"
					content="Télécharger votre propriété sur la forme Zubu et elle sera prête pour une annonce"
				/>
				<meta name="viewport" content="width=device-width, initial-scale=1" />
				<link rel="icon" href="/favicon.ico" />
			</Head>
			<main>
				<Header />
				<div className="flex m_wax h_max"> updating a random proprety </div>
				<div className="two_part m_x-20">
					<div className="">
						<PropretyBanner />
						<UpdateRentalInformation />
						<div className="m_top-10">
							<PropretyNavbar />
						</div>
						<InternalDescription />
						<ExternalDescription />
						<TenantCharge />
					</div>
					<div>
						<PropretyGalleryUpdate />
					</div>
				</div>
				<Footer />
			</main>
		</>
	);
}
