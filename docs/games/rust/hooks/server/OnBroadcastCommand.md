---
hide_table_of_contents: true
---

# OnBroadcastCommand

## Usage

* Called before a command is broadcasted to all connected clients
* Returning a non-null value overwrites command arguments

## Examples

```csharp title=""
object OnBroadcastCommand(string command, object[] args)
{
    Puts("OnBroadcastCommand works!");
    return null;
}
```
