<?php

    class Healthcare {

        public function post_save($data) {

            $sql = "";
            if ($data->id == 0)
            {
                //insert
                $sql = "INSERT INTO healthcare (name) VALUES (:name)";
            }
            else
            {
                //update
                $sql = "UPDATE healthcare SET name=:name WHERE id=:id";
            }

            $stmt = DB::prepare($sql);
            $stmt->bindParam("name", $data->name);

            if ($data->id!=0)
                $stmt->bindParam ("id", $data->id);

            $stmt->execute();

            if ($data->id==0)
                $data->id = DB::lastInsertId();

            return $data;

        }

        function get_list($id) {
            //todo
        }

        function get_listAll() {
            $sql = "SELECT * FROM healthcare";
            $stmt = DB::prepare($sql);
            $stmt->execute();

            $result = $stmt->fetchAll();
            return $result;
        }

        function post_delete() {
            //todo
        }

    }

?>