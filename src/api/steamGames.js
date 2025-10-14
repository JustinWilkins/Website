const fetch = global.fetch;

exports.handler = async function (event, context) {
    try {
        const STEAM_API_KEY = process.env.STEAM_API_KEY;
        const STEAM_ID = "76561198254461806";

        const response = await fetch(
            `https://api.steampowered.com/IPlayerService/GetOwnedGames/v1/?key=1E4CE5D70FDF61F8A31E40A1FAE0B33E&steamid=76561198254461806&include_appinfo=true`
        );

        const excludedGames = [
            644560, 644560, 333600, 339800, 1170610, 1207780, 1212020, 1271190, 1271710, 2427420, 2427430, 2427410, 3595230
        ];

        const data = await response.json();
        const allGames = data.response.games || [];

        const visibleGames = allGames.filter(game => !excludedGames.includes(game.appid));

        return {
            statusCode: 200,
            body: JSON.stringify(visibleGames),
        };
    } catch (err) {
        console.error(err);
        return {
            statusCode: 500,
            body: JSON.stringify({ error: "Failed to fetch Steam games" }),
        };
    }
};