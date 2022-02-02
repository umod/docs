---
hide_table_of_contents: true
---

# OnUserCommand

## Usage

* Useful for intercepting players' commands before their handling
* Return a non-null value to override default behavior

## Examples

```csharp title=""
object OnUserCommand(IPlayer player, string command, string[] args)
{
    Puts("OnUserCommand works!");
    return null;
}
```
