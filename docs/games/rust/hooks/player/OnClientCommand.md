---
hide_table_of_contents: true
---

# OnClientCommand

## Usage

* Useful for intercepting players' commands before their handling
* Called before OnPlayerCommand and OnUserCommand
* Return a non-null value to override default behavior

## Examples

```csharp title=""
object OnClientCommand(Network.Connection connection, string command)
{
    Puts("OnClientCommand works!");
    return null;
}
```
