<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;
use App\Models\Novel;


class NovelController extends Controller
{
    /**
     * Display all data.
     *
     * @return \Illuminate\Http\Response
     */
    public function all()
    {
        return Novel::all();
    }

    /**
     * Store a newly created resource in storage.
     *
     * @param  \Illuminate\Http\Request  $request
     * @return \Illuminate\Http\Response
     */
    public function store(Request $request)
    {
        return Novel::create($request->all());
    }

    /**
     * Display the specified resource.
     *
     * @param  int  $id
     * @return \Illuminate\Http\Response
     */
    public function show($id)
    {
        return Novel::find($id);
    }

    /**
     * Update the specified resource in storage.
     *
     * @param  \Illuminate\Http\Request  $request
     * @param  int  $id
     * @return \Illuminate\Http\Response
     */
    public function update(Request $request, $id)
    {
        $Novel = Novel::find($id);
        $Novel->update($request->all());
        return $Novel;
    }

    /**
     * Remove the specified resource from storage.
     *
     * @param  int  $id
     * @return \Illuminate\Http\Response
     */
    public function destroy($id)
    {
        $Novel = Novel::find($id);
        $Novel->delete();
        return 204;
    }
}
