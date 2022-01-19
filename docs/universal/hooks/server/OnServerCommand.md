---
hide_table_of_contents: true
---

# OnServerCommand

## Usage

* Called before a server command is executed on the server
* Return a non-null value to stop command from being executed

## Examples

```csharp title="Block and log command usage"
object OnServerCommand(string command, string[] args)
{
    if (command.Equals("quit", StringComparison.OrdinalIgnoreCase))
    {
        Puts($"Blocked server command: {command} {(args != null ? string.Join(" ", args) : "")}");
        return false;
    }

    return null;
}
```

```csharp title="Allow and log command usage"
void OnServerCommand(string command, string[] args)
{
    Puts($"Executed server command: {command} {(args != null ? string.Join(" ", args) : "")}");
}
```
