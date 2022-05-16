import { request } from "react-request-hook";

enum Methods {
    GET = "GET",
    PATCH = "PATCH",
    POST = "POST",
}

let api = getApis();

function getApis(): any {
    return {
        getAPIResponseGeneratorSchema: () => request<any>({
            method: Methods.GET,
            url: `/api/userWallsAPIResponseGeneratorPostSchema`,
        }),
        generatePlanPickerAPIResponse: (payload: any) => request<any>({
        method: Methods.POST,
        url: `api/planPicker`,
        data: payload
    })
    };

}


export default api;
