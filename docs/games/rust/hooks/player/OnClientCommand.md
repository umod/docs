---
hide_table_of_contents: true
---

# OnClientCommand

## Usage

* Useful for intercepting players' commands before their handling
* Called before OnPlayerCommand and OnUserCommand
* Returning a non-null value overrides default behavior

## Examples

```csharp title=""
object OnClientCommand(Network.Connection connection, string command)
{
    Puts("OnClientCommand works!");
    return null;
}
```
