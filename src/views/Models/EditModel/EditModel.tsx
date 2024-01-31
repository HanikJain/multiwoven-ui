import { useQuery } from "@tanstack/react-query";
import DefineSQL from "../ModelsForm/DefineModel/DefineSQL";
import { useParams } from "react-router-dom";
import { Box } from "@chakra-ui/react";
import { getModelById } from "@/services/models";
import { PrefillValue } from "../ModelsForm/DefineModel/DefineSQL/types";
import TopBar from "@/components/TopBar";

const EditModel = () => {
	const params = useParams();
	const model_id = params.id || "";

	const { data, isLoading, isError } = useQuery({
		queryKey: ["modelByID"],
		queryFn: () => getModelById(model_id || ""),
		refetchOnMount: true,
		refetchOnWindowFocus: true,
	});

	const prefillValues: PrefillValue = {
		connector_id: data?.data?.attributes.connector.id || "",
		connector_icon: data?.data?.attributes.connector.icon || "",
		connector_name: data?.data?.attributes.connector.name || "",
		model_name: data?.data?.attributes.name || "",
		model_description: data?.data?.attributes.description || "",
		primary_key: data?.data?.attributes.primary_key || "",
		query: data?.data?.attributes.query || "",
		query_type: data?.data?.attributes.query_type || "",
        model_id: model_id
	};

	if (isLoading) {
		return <>Loading....</>;
	}

	if (isError) {
		return <>Error....</>;
	}

	return (
		<Box width='90%' mx='auto'>
			<TopBar name='Edit Model Query' />
			<DefineSQL
				isFooterVisible={false}
				hasPrefilledValues={true}
				prefillValues={prefillValues}
				isUpdateButtonVisible={true}
			/>
		</Box>
	);
};

export default EditModel;