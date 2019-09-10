import (
    gl
    glfw
    time
)

fn main() {

    glfw.init()

    win_cfg := glfw.WinCfg{
          width:500,
          height:500,
          title:'triangle',
    }

    window := glfw.create_window(win_cfg)

    window.make_context_current()

    gl.init_glad()

    gl.viewport(0,0,500,500)

    shader := gl.new_shader('main')

    vertices := [
            -0.5, -0.5, 0.0, // left
             0.5, -0.5, 0.0, // right
             0.0,  0.5, 0.0  // top
    ]

    vbo := gl.gen_buffer()

    vao := gl.gen_vertex_array()

    gl.bind_vao(vbo)

    gl.bind_buffer(C.GL_ARRAY_BUFFER,vbo)
    gl.buffer_data(C.GL_ARRAY_BUFFER,vertices.len * 4,vertices,C.GL_STATIC_DRAW)
    gl.vertex_attrib_pointer(0,3,C.GL_FLOAT,false,3,0)
    gl.enable_vertex_attrib_array(0)

    gl.bind_buffer(C.GL_ARRAY_BUFFER,u32(0))

    gl.bind_vao(u32(0))

    for !window.should_close() {

        gl.clear_color(255, 255, 255,1)
        gl.clear()

        shader.use()
        gl.bind_vao(vao)

        gl.draw_arrays(C.GL_TRIANGLES, 0, 3)

        window.swap_buffers()
        glfw.poll_events()

        time.sleep_ms(100)
    }
}