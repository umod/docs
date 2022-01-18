---
hide_table_of_contents: true
---

# OnServerCommand

## Usage

* Called before a server command is executed on the server
* Return a non-null value to stop command from being executed

## Examples

```csharp title="Universal, command blocked and logged"
object OnServerCommand(string command, string[] args)
{
    if (command.Equals("quit", StringComparison.OrdinalIgnoreCase))
    {
        Puts($"Server command blocked: {command} {(args != null ? string.Join(" ", args) : "")}");
        return false;
    }

    return null;
}
```

```csharp title="Universal, command logged"
void OnServerCommand(string command, string[] args)
{
    Puts($"Server executed command: {command} {(args != null ? string.Join(" ", args) : "")}");
}
```
