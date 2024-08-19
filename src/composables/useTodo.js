import { ref, onMounted } from 'vue';
import useRequest from './useRequest'

const todos = ref([]);

export default () => {
    const request = useRequest();
    const load = async () => {
        todos.value = await request.get();
    };
    const del = async (id) => {
        await request.delete(id);
        load();
    }
    const add = async (todo) => {
        await request.post(todo);
        load();
    }

    return { todos, load, del, add }
}