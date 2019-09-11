import (
    gl
    glfw
    time
    math
)

fn main() {

    glfw.init()

    win_cfg := glfw.WinCfg{
          width:500,
          height:500,
          title:'shader',
    }

    window := glfw.create_window(win_cfg)

    window.make_context_current()

    gl.init_glad()

    gl.viewport(0,0,500,500)

    shader := gl.new_shader('main')

    vertices := [
           // 位置              // 颜色
                0.5, -0.5, 0.0,  1.0, 0.0, 0.0,   // 右下
               -0.5, -0.5, 0.0,  0.0, 1.0, 0.0,   // 左下
                0.0,  0.5, 0.0,  0.0, 0.0, 1.0    // 顶部
    ]

    vbo := gl.gen_buffer()

    vao := gl.gen_vertex_array()

    gl.bind_vao(vao)

    gl.bind_buffer(C.GL_ARRAY_BUFFER,vbo)
    gl.buffer_data_f32(C.GL_ARRAY_BUFFER,vertices,C.GL_STATIC_DRAW)
    gl.vertex_attrib_pointer(0,3,C.GL_FLOAT,false,6,0)
    gl.enable_vertex_attrib_array(0)

    gl.vertex_attrib_pointer(1,3,C.GL_FLOAT,false,6,3)
    gl.enable_vertex_attrib_array(1)

    gl.bind_buffer(C.GL_ARRAY_BUFFER,u32(0))

    gl.bind_vao(u32(0))

    for !window.should_close() {

        gl.clear_color(255, 255, 255,1)
        gl.clear()

        shader.use()

        t := glfw.get_time()
        green_value := math.sin(t)/ 2.0 + 0.5
        location := shader.uni_location('ourColor')
        C.glUniform4f(location, 0.0, green_value, 0.0, 1.0)

        gl.bind_vao(vao)

        gl.draw_arrays(C.GL_TRIANGLES, 0, 3)

        window.swap_buffers()
        glfw.poll_events()

        time.sleep_ms(100)
    }
}