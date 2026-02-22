const Apifetch = async ({ url, optionobj }) => {
    try {
        const response = await fetch(url, optionobj);
        if (!response.ok) {
            const text=await response.text();
            throw new Error(text || "Error occurred");
        }
        const contentType=response.headers.get("Content-type");

        if(contentType && contentType.includes("application/jon")){
            return await response.json();
        }
       return null;
    } catch (err) {
        return err.message;
    }
};

export default Apifetch;


