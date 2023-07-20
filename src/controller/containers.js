import { client } from '../database';

export const getContainers = async (req, res) => {
    const query = 'SELECT * FROM containers';
    try {
        const result = await client.execute(query);
        return res.status(200).json({
            msg: 'Containers obtenidos exitosamente',
            data: result.rows
        });
    } catch (error) {
        return res.status(500).json({
            msg: 'Ocurrio un error al obtener los containers',
            error
        });
    }
};

export const getTemperatureById = async (req, res) => {
    const container_id = req.params.id;
    const query = 'SELECT * from history_by_container WHERE container_id = ?';
    try {
        const result = await client.execute(query, [container_id], { prepare: true });
        return res.status(200).json({
            msg: 'Temperaturas obtenidas exitosamente',
            data: result.rows
        });
    } catch (error) {
        return res.status(500).json({
            msg: 'Ocurrio un error al obtener las Temperaturas',
            error
        });
    }
};
