---
hide_table_of_contents: true
---

# OnSendCommand

## Usage

* Called before a command is sent from the server to a player (or a group of players)
* Usually commands aren't sent to a group of players, so in most cases it's safe to use only OnSendCommand with a single Connection.
* Returning a non-null value overwrites command arguments

## Examples

```csharp title=""
object OnSendCommand(List<Connection> connections, string command, object[] args)
{
    Puts("OnSendCommand works!");
    return null;
}
```

```csharp title=""
object OnSendCommand(Network.Connection connection, string command, object[] args)
{
    Puts("OnSendCommand works!");
    return null;
}
```
